import express, { Request, Response } from "express";
import { body , validationResult } from "express-validator";
import cookieParser from "cookie-parser";

import { Buyer } from "../models/buyerModel";
import { JwtToken } from "../helpers/jwtToken";
import { Password } from "../helpers/password";
import { auth } from "../helpers/middlewares/auth";
import { log } from "console";
import { allBuyers } from "./allBuyers";

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

async (req: Request, res: Response) => {  
  console.log("from signin");
  
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).send({ errors: errors.array() })
  }

  const {email, password} = req.body;

  const buyer = await Buyer.findOne({email});
  
  if(!buyer){
    throw new Error("Invalid Credentials !");
  }

  const pwMatches = await Password.comparePassword(password, buyer.password);

  if(!pwMatches){
    throw new Error("Invalid Credentials");
  }

  const jwtToken = await JwtToken.generateJwt(buyer);

  res.cookie("carBuyer-jwt", jwtToken, {"httpOnly": true})
     .json({ message: "Logged in successfully !!" });     

  // res.status(200).send(buyer).json({ message: "Logged in successfully !!" })
});

export { router as signInRouter };
