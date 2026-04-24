const express=require('express');
const app=express();
const bcrypt=require('bcrypt')
const initializepassport=require('./passport-config');
const flash=require('express-flash')
const session=require('express-session')
require('dotenv').config()
const passport = require('passport');
const methodOverride=require('method-override')

initializepassport(passport,
    email => users.find(user=>user.email===email),
    id=> users.find(user=>user.id===id),
)

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json()); 
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(methodOverride('_method'))

app.use(passport.initialize())
app.use(passport.session())

const users=[]



app.get('/register',checkNotAuthenticated,(req,res)=>{
    res.render('register.ejs')
})

app.post('/register',async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    
    try {
        const hashedPassword=await bcrypt.hash(password,10)
        users.push({
            id:Date.now().toString(),
            email:email,
            password:hashedPassword
        })
        res.redirect('/login')
    } catch (error) {
        console.log(error);
        
        res.redirect('/register')
    }
    console.log(users);
})

app.get('/login',checkNotAuthenticated,(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}))

app.delete('/logout',(req,res)=>{
     req.logOut(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect('/login')
    })
})

app.all('/',checkAuthenticated,(req,res)=>{
    res.render('index.ejs')
})

app.listen('3000',()=>{
    console.log('server running  on http://localhost:3000');
    
})

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect('/login')
    }
}



function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
       return res.redirect('/')
    }
    next()
}