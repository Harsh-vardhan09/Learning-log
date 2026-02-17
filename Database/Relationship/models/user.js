const mongoose=require("mongoose");
const {Schema}=mongoose;


main().then(()=>console.log("connection succesful")).catch(err=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        },
    ],
});

const User=mongoose.model("user",userSchema);

const addUser=async()=>{
    let user1=new User({
        username:"sherlockholmes",
        addresses:[{
            location:"22 baker streew",
            city:"london"
        }]
    });
    user1.addresses.push({location:"p32 wallstreet",city:"london"});
    let res=await user1.save();
    console.log(res);
    
};

addUser();