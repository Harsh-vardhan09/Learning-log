const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection succesful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[{
        type:Schema.Types.ObjectId,
        ref:'Order'
    }]
});

//we are calling findByIdAndDelete and this call findOneAndDelete as middleware.
//thats why these middleware are working for these

//this works before the execution of the function
// customerSchema.pre("findOneAndDelete",async()=>{
//   console.log("pre middleware")
// });

//this works after the execution of the function 
customerSchema.post("findOneAndDelete",async(customer)=>{
  if(customer.orders.length){
    let res=await Order.deleteMany({_id:{$in:customer.orders} });
    console.log(res);
    
  }
});

/*
if we want to only add the object id as ref we type Schema.Types.ObjectId
this adds only the id ref since populate uses to save storage 
To add whole data we need to write [schemaName] in types.
*/



const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer=async()=>{
//     let cust1=new Customer({
//         name:"rahul",
//     });
//     let order1=await Order.findOne({item:"chips"});
//     let order2=await Order.findOne({item:"chocolate"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res=await cust1.save();
//     console.log(res);
    
// }

// addCustomer();


// const addOrders = async () => {
//  let res= await Order.insertMany([
//     { item: "samosa", price: 12 },
//     { item: "chips", price: 10 },
//     { item: "chocolate", price: 40 },
//   ]);
//   console.log(res);
// };

// addOrders();


//Functions
const findCustomer=async()=>{
    let res=await Customer.find({}).populate("orders");
    console.log(res);
}

// findCustomer();

const addCust=async()=>{
  let newCust=new Customer({
    name:"aryan arjun",   
  });

  let newOrder=new Order({
    item:"burger",
    price:150
  });
  newCust.orders.push(newOrder);
  await newCust.save();
  await newOrder.save();
  console.log("added new customer");
}

// addCust();

const delCust=async()=>{
  let data=await Customer.findByIdAndDelete('6973a48593466c6cafacfa74');
  console.log(data);
  
}

delCust();

