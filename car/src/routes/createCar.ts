import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { Car } from "../models/carModel";

const router = express.Router()

router.post("/api/cars/createCar", 
  [
    body("brand") 
      .isString()
      .withMessage("Please provide a valid input"),

    body("modelName")
      .isString()
      .withMessage("Please provide a valid String"),

    body("price")
        .isNumeric()
  ],

  async (req : Request, res : Response) => {
    const errors = validationResult(req);

    try{
      if (!errors.isEmpty()) {
        return res.sendStatus(400).send(errors.array());
      } 

      const { brand, modelName, price } = req.body;

      const carExists = await Car.findOne({modelName})

      if (carExists){
        console.log("You already own the Car !!");
        
        return res.sendStatus(400).send({});
      }

      const car = await Car.buildCar({brand, modelName, price}) 
      await car.save();
      
      console.log(car);
    }

    catch(e){
      console.log(e);      
    }
})

export { router as createCarRouter }