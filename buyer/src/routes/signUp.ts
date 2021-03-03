import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import JWT from 'jsonwebtoken';

import { Buyer } from "../models/buyerModel";

const JWT_SECRET: any = process.env.JWT_SECRET;

const router = express.Router();

router.post(
  "/api/buyers/signUp",
  [
    body("name") // look for the buyername prop in req body
      .isString()
      .withMessage("Please provide a valid input"),

    body("email")
      .isEmail()
      .withMessage("Please provide a valid Email"),

    body("password")
      .trim()
      .isLength({ min: 6, max: 14 })
      .withMessage("Please enter your Password"),
  ],

  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());        
      }

      const { name, email, password } = req.body;

      const buyerExists = await Buyer.findOne({ email });

      if (buyerExists) {
        console.log("Email already in use !!");

        return res.status(400).send({});
      }

      const buyer = Buyer.buildBuyer({ name, email, password });
      await buyer.save();

      const token = JWT.sign({
        iss: 'Tanish',
        sub: buyer.id,
        iat: new Date().getTime(),  // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 24 hrs
      }, JWT_SECRET)

      console.log(`buyer: ${buyer}, token: ${token}`);            

      res.status(201).send({buyer, token});
    }
    catch(e){
      console.log(e);      
    }
  }
);

export { router as signUpRouter };
