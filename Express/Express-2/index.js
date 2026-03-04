const { log } = require("console");
const express = require("express");
const app = express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="helloworld";

app.use(express.json());

const users = [];

/*
username,password,token
*/

function generateToken() {
  let options =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  } //math.random gives 0-1 | math.random*option.length=>0-32
  return token;
}

app.post("/signup", (req, res) => {
  // input validation using zod
  const username = req.body.username;
  const password = req.body.password;
  if (users.find((u) => u.username === username)) {
    res.json({
      msg: "user already exist",
    });
  }
  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "you are signed up",
  });

//   console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      user = users[i];
    }
  }

  // const user=users.find((u)=>{
  //     if(u.username===username && u.password===password){
  //         return true;
  //     }else{
  //         return false
  //     }
  // })

  if (user) {
    const token = jwt.sign({
        username:username
    },JWT_SECRET);//convert username over to a jwt using the secret
    // user.token = token; //dont need to save it in memory since jwt is stateless
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      msg: "invalid username or password",
    });
  }

//   console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInfo=jwt.verify(token,JWT_SECRET); //{username:}
  const username=decodedInfo.username;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
        username:foundUser.username,
        password:foundUser.password
    });
  }else{
    res.json({
        msg:"token invalid"
    })
  }

});





app.listen("8080", () => {
  console.log("app is running on http://localhost:8080");
});
