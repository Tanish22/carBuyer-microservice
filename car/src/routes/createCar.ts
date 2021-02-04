import express, { Request, Response } from "express";
import { Car } from "../models/carModel";

const router = express.Router()

router.post('/api/cars/createCar', async (req : Request, res : Response) => {
    //const { brand, modelName, price } = req.body;
    const car = Car.buildCar(req.body)
    await car.save();

    res.send(car);
})

export { router as createCarRouter }