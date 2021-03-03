import { userInfo } from "os";
import passport from "passport";
import passportJwt from 'passport-jwt';
import {Buyer} from '../../models/buyerModel';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const JWT_SECRET = process.env.JWT_SECRET

passport.use(new JwtStrategy({

    //  specifies where the token resides inside the request object 
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    //  extracting jwt from authorization header
    
    //  the secret key to decode token
    secretOrKey : JWT_SECRET
}, async (payload, done) => {
    try{
        //  find the user specified in the token (payload.sub : from users controllers module)
        const user = await Buyer.findById(payload.sub);

        if(!user){            
            return done(null, false);
        }

        done(null, user)
    }
    catch(error){
        done(error, false)
    }
}))



