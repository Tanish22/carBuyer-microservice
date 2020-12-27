import express, { Request, Response } from "express";
import { body , validationResult } from "express-validator";

const saltPW: any = process.env.BCRYPT_HASH;

import { Buyer } from "../models/buyerModel";
import { Password } from "../helpers/password"

const router = express.Router();

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
  const errors = validationResult(req);

  if(!errors.isEmpty){
    return res.status(400).send({ errors: errors.array() })
  }

  const {email, password} = req.body;

  const buyer = await Buyer.findOne({email});

  if(!buyer){
    throw new Error("Invalid Credentials");
  }
  
  const pwMatches = await Password.comparePassword(saltPW, buyer.password);
  
  if(!pwMatches){
    throw new Error("Invalid Credentials");
  }
  
  res.status(201).send(buyer);
});

export { router as signInRouter };
