import express from "express";
import cors from "cors";
import UserModel from "./config/db.js";
import { compareSync, hashSync } from "bcrypt";
const app = express();
import jwt from "jsonwebtoken";
import passport from "passport";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize())

import './config/passport.js' 

app.post("/register", async (req, res) => {
  const user = new UserModel({
    username: req.body.username,
    password: hashSync(req.body.password, 10),
  });
  user
    .save()
    .then(() => {
      res.json({
        Success: true,
        message: "user signed up",
        user: {
          id: user._id,
          username: user.username,
        },
      });
    })
    .catch((e) => console.log(e));
});

app.post("/login", (req, res) => {
  UserModel.findOne({
    username: req.body.username,
  }).then((user) => {
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "could not find user",
      });
    }
    if(!compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        success: false,
        message: "incorrect password",
      });
    }
    const payload = {
      username: user.username,
      id: user._id,
    };
    

    const token = jwt.sign(payload, "Randomstring", { expiresIn: "7d" });
    return res.status(200).send({
      success: true,
      message: "Logged in succesfull",
      token: `Bearer ${token}`,
    });
  });
});

app.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.status(200).send({
        success:true,
        message:'succesfully done ',
        user:{
            id:req.user._id,
            username:req.user.username
        }
    })
})

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
