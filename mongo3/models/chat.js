const mongoose = require("mongoose");

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true
    }
});

/**
 * Chat model for MongoDB
 * Represents a Chat collection in the MongoDB database using Mongoose ODM
 * @type {Model} Mongoose model instance for Chat documents
 */
const Chat =mongoose.model("Chat",chatSchema);

module.exports=Chat;