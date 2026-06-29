import express from 'express';
import Redis from 'ioredis'

const app=express();
app.use(express.json())
const redis=new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

function otpKey(phone){
    return `OTP:${phone}`
}

app.post('/otp',async(req,res)=>{
    const {phone}=req.body;
    const otp=Math.floor(100000+Math.random()*900000).toString();
    
    await redis.set(otpKey(phone),otp,'EX',60);//otp valid for 60 sec
    res.json({message:`OTP sent`,otp}); //In real application, send OTP via SMS
    
});

app.post('/otp-verify',async(req,res)=>{
    cosnt [phone,otp]=req.body;
    const savedOtp=await redis.get(otpKey(phone));

    if(!savedOtp){
        return res.status(400).json({message:'OTp expired not found'});

    }

    if(savedOtp!==otp){
        return res.status(400).json({message:'invalid OTP'});
    }

    await redis.del(otpKey(phone));
    res.json({message:'OTP verified successfully'})
})

app.get('/otp/:phone/ttl',async(req,res)=>{
    const ttl=await redis.ttl(otpKey(req.params.phone));
    if(ttl===-2){
        res.json({ttl})
    }
})

app.listen(3000);