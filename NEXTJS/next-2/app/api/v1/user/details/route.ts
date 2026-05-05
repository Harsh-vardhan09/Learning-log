import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        user:'aarsh',
        email:"aarsh@gmail.com"
    })
}