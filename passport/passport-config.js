const { authenticate } = require('passport')
const bcrypt=require('bcrypt')

const PassportLocal=require('passport-local')
const LocalStrategy=PassportLocal.Strategy

function initialize(passport,getUserEmail,getUserById){
    const authenticateUser=async(email,password,done)=>{
        const user=getUserEmail(email);
        if(!user) return done(null,false,{message:"no user with this email"})

        try {
            if(await bcrypt.compare(password,user.password)){
                return done(null,user)
            }else{
                 return done(null,false,{message:"password incorrect"})
            }
        } catch (error) {
            return done(error)
        }
    }

    passport.use(new LocalStrategy({
        usernameField:'email'
    },authenticateUser))
    passport.serializeUser((user,done)=>done(null,user.id))
    passport.deserializeUser((id,done)=>done(null,getUserById(id)))
}

module.exports=initialize