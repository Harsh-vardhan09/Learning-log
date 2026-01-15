const express=require("express");
const app=express();
const path=require("path");


const port=8080;
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("views",path.join(__dirname,"/views"))

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
     let diceValue =Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{num:diceValue});
});
   

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   const instaData=require("./data.json");
   const data=instaData[username];
   
   res.render("instagram.ejs",{data});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
 
