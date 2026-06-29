import express from 'express'
import Redis from 'ioredis'

const app=express()
app.use(express.json());

const redis=new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

const BANNER_KEY="app:banner";

app.post("/banner",async(req,res)=>{
   try {
     await redis.set(BANNER_KEY,req.body.message || "Welcome to hello world")
     res.json({success:true})
   } catch (error) {
    console.log(error);
   }
});

app.get("/banner",async(req,res)=>{
   const message=await redis.get(BANNER_KEY);
   if(message){
    res.json({message})
   }else{
    res.json({message:`this is default message`})
   }
});

app.delete("/banner",async(req,res)=>{
  await redis.del(BANNER_KEY);
  res.json({success:true})
});

app.get("/banner/exist",async(req,res)=>{
    const exists=await redis.exists(BANNER_KEY);
    res.json({exists:Boolean(exists)})
})

app.listen(3000,()=>{
    console.log(`this runs on http://localhost:3000`);
    
})

