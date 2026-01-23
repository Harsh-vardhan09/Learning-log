const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");


// //middleware = send response so the get res never sends the res
// app.use((req,res,next)=>{
//     console.log("this is a 1st middleware");
//     next();
//     console.log("this is after next()");//here this will also work after the middleware.if we use return next code written below in the func  will work after it
// });//middleware is working so it wont get to the / path

// app.use((req,res,next)=>{
//     console.log("this is a 2nd middleware");
//     next();
    
// });

//middleware is written at start of the page since if teh req gets path then middleware will not hit and output will get send out.
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED")
});

app.listen(8080,()=>{
    console.log("server is working");
    
});

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.use("/random",(req,res,next)=>{
    console.log("for random path middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("working")
});
app.get("/random",(req,res)=>{
    res.send("working path random")
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS TO ADMIN IS FORBIDDEN")
})

app.use((err,req,res,next)=>{
    let {status=500,message="some error"}=err;
    res.status(status).send(message);
});

// app.use((err,req,res,next)=>{
//     console.log("----error2-----");
//     next(err);
// });


// app.use((req,res)=>{
//     res.send("404 page not found")
// });

//we create a default path at end of page that if not other is matched in it it gets called for 404 not found