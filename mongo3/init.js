const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

let allChats=([
  {
    from: "neha",
    to: "priya",
    msg: "send notes",
    created_at: new Date(), //utc set since z at end
  },
  {
    from: "priya",
    to: "neha",
    msg: "okay, sending now",
    created_at: new Date(),
  },
  {
    from: "raj",
    to: "amit",
    msg: "hey, how are you?",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "raj",
    msg: "I'm good, thanks for asking",
    created_at: new Date(),
  },
  {
    from: "zara",
    to: "sara",
    msg: "let's meet tomorrow",
    created_at: new Date(),
  },
  {
    from: "sara",
    to: "zara",
    msg: "sounds good!",
    created_at: new Date(),
  },
]);


Chat.insertMany(allChats)