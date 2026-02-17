import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const methodOverride=require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


let q = "INSERT INTO user (id,username,email,password) VALUES ?";

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "harsh",
});

// let data=[];
// for(let i=1;i<=100;i++){
//    data.push( getRandomUser()); //pushing data into the data array and inserting into the sql

// }

app.listen("8080", () => {
  console.log("server is running at port 8080");
});

//count user
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      console.log(result);
      // res.send(result[0]["COUNT(*)"]);
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(err);
    res.send("some err with db");
  }

  // res.send("welcome to home page");
});

//show route
app.get("/user",(req,res)=>{
    let q='SELECT * FROM user';
    
    try {
    connection.query(q, (err,users) => {
        if (err) throw err;
            //   console.log(result);
            //   res.send(result);
        res.render("showusers.ejs",{users});
    });
  } catch (error) {
    console.log(err);
    res.send("some err with db");
  }

    // res.send("successs");
});

//EDIT Route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    
    let q=`SELECT * FROM user WHERE id='${id}'`;  //here we have to add this in qoute the id since the we can only compare when both are in string and the other was not in string format.
    try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      let user=result[0];
     res.render("edit.ejs",{user});
    });
  } catch (error) {
    console.log(err);
    res.send("some err with db");
  }
    
    
    
});

//UPDATE(DB) ROUTE
//from form we get password.newusername,id so we do steps:-
    //search user based on id.
    //check if (form.password=db.password)
    //update user in db

app.patch("/user/:id",(req,res)=>{

     let {id}=req.params;
    let {password: formPass,username:newUsername}=req.body;

    let q=`SELECT * FROM user WHERE id='${id}'`;  //here we have to add this in qoute the id since the we can only compare when both are in string and the other was not in string format.

    try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      let user=result[0];
      if(formPass!=user.password){
        res.send("WRONG PASSWORD");
      }else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
    
  } catch (error) {
    console.log(err);
    res.send("some err with db");
  }
    

    // res.send("updated");
});


// try {
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);

//     });
// } catch (error) {
//     console.log(err);
// }

// connection.end();

//to access the mysql workbench we use command cd "C:\Program Files\MySQL\MySQL Server 8.0\bin\"
//then  .\mysql -u root -p
//after which we type password of mysql to use connect to server.
