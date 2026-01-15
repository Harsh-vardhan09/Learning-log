const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("connection successfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number,
//     //use this when there is not many constraints directly assign constraint to the key
// });

const bookSchema = new mongoose.Schema({
    title: {
        type: String, //type of the data type
        required: true, //it cannot be empty
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"price is too low"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"], //only these option can be used in the category of the book this are used to set a option to not allow random entries.
    },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "mathematics XII",
    author: "RD Sharma",
    price: 1200,
});
let book2 = new Book({
    title: "mathematics VIII",
    author: "RD Sharma",
    price: 1000,
});
let book3 = new Book({
    title: "How to kill a Mockingbird",
    author: "harper lee",
    price: 600,
});

book1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

book2
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

book3
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// The validation are not working in case of the updation which mean if we have min 1 but we update value -500 it will update.

Book.findOneAndUpdate(
    { author: "harper lee" },
    { price: -500 },
    { runValidators: true }
)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
