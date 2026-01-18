const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));



main()
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}
 

app.listen(8080, () => {
  console.log("server is running on 8080");
});

//asyncWrap fuction syntax

function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch(err=>next(err));
  };
}; 


//index route
app.get("/chats",asyncWrap(async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats})
    // console.log(chats);
}));

//new route
app.get("/chats/new",(req,res)=>{
  // throw new ExpressError(401,"page not found")
  res.render("new.ejs")
})

//create route
app.post("/chats",asyncWrap(async(req,res,next)=>{
      let {from,msg,to}=req.body;
      let newChat=new Chat({
          from:from,
          to:to,
          msg:msg,
          created_at:new Date()
      });
      //database create delete update everything is an asynchronus func so we need to use await or then.
      await newChat.save();
      res.redirect("/chats")
   //where we use then we dont use await since then is considered async by js.
}));

//new -show route
app.get("/chats/:id",async(req,res,next)=>{
  try{
    let {id}=req.params;
    let chat=await Chat.findById(id);
     if(!chat){
      console.log("not found");
      next(new ExpressError(404,"chat not found"));//async doesnt call next automatically so we need to explicitly call it in async func in version 4  of express. in version 5 it does call next automatically
     }
    res.render("edit.ejs",{chat});
  }catch(err){
    next(err);
  }
});

//if we send the wrong length we get mongoose error so we should send the right length.

//Edit route 
app.get("/chats/:id/edit",async(req,res,next)=>{
  try{

    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
  }catch(err){
    next(err);
  }
});

//Update route
app.put("/chats/:id",async(req,res,next)=>{
  try{
    let {id}=req.params;
    let {msg:newMsg}=req.body;

    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats")
  }catch(err){
    next(err);
  }
})

//delete

app.delete("/chats/:id",async(req,res,next)=>{
  try {
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
  } catch (err ) {
    next(err)
  }
});

//handling special error 

const handleValidationError=(err)=>{
  console.log("this is a validation error please follow rules");
  console.dir(err);
  return err;
};


//name of error for each differnt error we waant differnt output

app.use((err,req,res,next)=>{
   console.log(err.name);
   if(err.name==="ValidationError"){
      err=handleValidationError(err);
   }
   next(err);
})

app.get("/", (req, res) => {
  // res.render("new.ejs");
  res.send("root is working")
});

app.use((err,req,res,next)=>{
  let{status=500,message="some error occured"}=err;
  res.status(status).send(message);
})
  