import express, { Request, Response } from "express";
import { body , validationResult } from "express-validator";
import cookieParser from "cookie-parser";

import { Buyer } from "../models/buyerModel";
import { JwtToken } from "../helpers/jwtToken";
import { Password } from "../helpers/password";
import { auth } from "../helpers/middlewares/auth";

const router = express.Router();

router.use(cookieParser());

router.post("/api/buyers/signIn", [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid Email"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Please provide a Password")  
], 

auth,

async (req: Request, res: Response) => {  
  console.log("from signin");
  
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).send({ errors: errors.array() })
  }

  const {email, password} = req.body;

  const buyer = await Buyer.findOne({email});

  // console.log(buyer);
  
  console.log("request cookies: ", req.cookies);
  
  if(!buyer){
    throw new Error("Invalid Credentials !");
  }

  console.log("password ", password);
  
  console.log("buyer.password ", buyer.password);
  
  //const pwMatches = await bcrypt.compare(password, buyer.password);
  const pwMatches = await Password.comparePassword(password, buyer.password);

  console.log("pwMatches ", pwMatches);

  if(!pwMatches){
    throw new Error("Invalid Credentials");
  }

  const jwtToken = await JwtToken.generateJwt(buyer);

  res.cookie("signIn-jwt", jwtToken, {"httpOnly": true});

  // console.log(buyer);

  res.status(200).send(buyer);
});

export { router as signInRouter };
