import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import 'dotenv/config'
import express from 'express'

const app=express();

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const client= new PrismaClient({ adapter });


app.get('/users',async(req,res)=>{
    const users=await client.user.findMany();
    res.json({
        users
    })
})


app.get('/users/:id',async(req,res)=>{
    const id=req.params.id;
    
    const user=await client.user.findFirst({
        where:{
            id:Number(id)
        },
        select:{
            todos:true,
            username:true,
            password:true
        }
    });
    res.json({
        user
    })
})


async function createUser() {
    // await client.user.create({
    //     data:{
    //         username:"aarsh",
    //         password:'hello@23',
    //         age:21,
    //         city:"delhi"
    //     }
    // })
    
}

async function getUser() {
    const user=await client.user.findFirst({
        where:{
            id:1
        },
        include:{
            todos:true
        }
    })
    console.log(user);    
}

createUser()
