import express, {Request, Response } from "express";
import {Car} from "../models/carModel";

const router = express.Router()

router.get("/api/cars/getCars", async (req: Request, res: Response) => {
    try{
        const cars = await Car.find({})
        console.log(cars);
        
        res.send(cars)
    }
    catch(e){
        console.log("error", e);        
    }
})

export {router as getAllCarsRouter}