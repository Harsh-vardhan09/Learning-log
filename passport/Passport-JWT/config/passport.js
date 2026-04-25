import UserModel from './db.js';
import passport from 'passport';

import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'; //this is to extract the jwt
let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // this takes jwt except the bearer part
opts.secretOrKey = 'Randomstring';  //this is our jwt secret for varificaation

// passport.use(
    
//   new JwtStrategy(opts, async (jwt_payload, done) => {
//     console.log(jwt_payload);
//     try {
//       const user = await UserModel.findOne({ _id: jwt_payload.id });
        
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     } catch (err) {
//       return done(err, false);
//     }
//   })
// );


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);
    
    UserModel.findOne({_id: jwt_payload.id}).then( function(user) {
        if (user) {
            return done(null, user); // on success
        } else {
            return done(null, false);
            // or you could create a new account
        }
    }).catch(e=>{return done(e,false)}) //catches error
}));