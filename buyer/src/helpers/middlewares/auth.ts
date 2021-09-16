import { userInfo } from "os";
import passport from "passport";
import passportJwt from 'passport-jwt';
import {Buyer} from '../../models/buyerModel';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const JWT_SECRET = process.env.JWT_SECRET

passport.use(new JwtStrategy({

    //  specifies where the token resides inside the request object & extracts jwt from the auth header
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    
    //  the secret key to decode token
    secretOrKey : JWT_SECRET
}, async (payload, done) => {   // done is the error-first callback
    try{
        //  find the user specified in the token (payload.sub : from generateToken function in signup)
        const buyer = await Buyer.findById(payload.sub);

        if(!buyer){            
            return done(null, false);   // no error & user doesnt exist
        }

        done(null, buyer)   // no error & user does exist
    }
    catch(error){
        done(error, false)  // there is an error
    }
}))



