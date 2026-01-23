const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection succesful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email:String,
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
});

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async()=>{

    let user=await User.find({username:"rajatshardul69"});
    let user1=new User({
        username:'rajatshardul69',
        email:"rajat@gamil.com"
    });

    let post1=new Post({
        content:"hello",
        likes:700,

    });

    let post2=new Post({
        content:"bye bye",
        likes:79
    });

    post2.user=user;//we are using this to connect the post to the user which is rajatshardul here it will give that a objectId of that user;
    // await user1.save();
    await post2.save();
}

// addData();

const getData=async()=>{
    let res=await Post.findOne({}).populate('user');
    console.log(res);
    
}
getData();