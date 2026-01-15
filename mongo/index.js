const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);//here user is both collection name and model name.we usually start it with capital letter.

// const Employee=mongoose.model("Employee",userSchema);

//#INSERTION

// const user1= new User({name:'adam',email:"adam@tahoo.com",age:42});//on load it auto has id field by mongoose cause new doc in mongodb gives id

// const user2= new User({name:'eve',email:"eve@tahoo.com",age:22});

// // user1.save();//to save in db
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:22},
//     {name:"mellsa",email:"mellisa@gmail.com",age:19},
//     {name:"bob",email:"bob@gmail.com",age:55},
//     {name:"bruce",email:"bruce@gmail.com",age:42},
// ]).then((res)=>{
//     console.log(res);
    
// });


//#FIND


// User.find({age:{$gt:40}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// User.findOne({age:{$gt:40}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// User.findOne({_id:'6949aa4e4e87ecd0ca8b10ad'}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// });


//use id in string since its saved in string in db.

// User.findById('6949aa4e4e87ecd0ca8b10ad').then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
// });


//#UPDATE

// User.updateOne({name:"bruce"},{age:49}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
    
// });


// User.updateMany({age:{$gt:40}},{age:55}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
    
// });


// User.findOneAndUpdate({name:"bruce"},{age:42},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
    
// });

// User.findByIdAndUpdate('6949cee9f4c28ad7139e8ea9',{age:42},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
    
// });

//#DELETE

// User.deleteOne({name:"adam"}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// User.deleteMany({age:{$gt:40}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// User.findByIdAndDelete('6949aa4e4e87ecd0ca8b10aa').then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

User.findOneAndDelete({name:"eve"}).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})