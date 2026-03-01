import { z } from "zod"
import express  from "express"
const app=express();

const userProfileSchema=z.object({
    name:z.string().min(1,{message:'name cannot be empty'}),
    email:z.string().email({message:'email cannot be empty'}),
    age:z.number().min(18,{message:"you must at least 18 year old"}).optional()
})

type FinalUserSchema=z.infer<typeof userProfileSchema>;//infer to the same type of the profileSchema

app.put("/user",(req,res)=>{
    const {success} =userProfileSchema.safeParse(req.body)
    const updateBody:FinalUserSchema=req.body;//how to assign a type to updateBody?
    if(!success){
        res.status(411).json({});
        return
    }
    //update the db 
    res.json({
        message:"user updated"
    })
})