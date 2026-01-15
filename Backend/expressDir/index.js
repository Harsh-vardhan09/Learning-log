const express =require("express");
const app=express();

// console.dir(app);

const port=3000;

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
    
})

// app.use((req,res)=>{
//     console.log("req recieved");
//     res.send("this is a basic response")
// });

app.get("/",(req,res)=>{
    res.send("you contacted root path");
    
});

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    const {username,id}=req.params;
    const htmlStr=`<h1>hello this is @${username}</h1>`
    res.send(htmlStr);
    
});

app.get("/search",(req,res)=>{
    // console.log(req.query);

    let {q}=req.query;
    
    if(!q){
        res.send("<h1> nothing searched</h1>");
    }
    res.send(`result is ${q}`);
});

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
    
// });
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
    
// });

// app.get("*splat",(req,res)=>{
//     res.send("this path does  not exist"); 
// });