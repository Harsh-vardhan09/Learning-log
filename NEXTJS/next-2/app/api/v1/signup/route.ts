import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "../../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});


export async function POST(req: NextRequest) {
    const data = await req.json()

    console.log(data);

    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })


    return NextResponse.json({
        message: "you have been signed up"
    })
}