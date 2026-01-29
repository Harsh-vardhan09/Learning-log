const express=require("express");
const router=express.Router();


//post

//index 
router.get("/",(req,res)=>{
    res.send("get for post");
});


//show 
router.get("/:id",(req,res)=>{
    res.send("get for show post");
});

//post 
router.post("/",(req,res)=>{
    res.send("post for post");
})

//delete -
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
})

module.exports=router;