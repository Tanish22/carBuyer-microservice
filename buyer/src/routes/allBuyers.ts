import express, {Request, Response} from "express";

import {Buyer} from "../models/buyerModel"

const router = express.Router();

router.get('/api/buyers/all', async (req: Request, res: Response) => {
    try{
        const buyers = await Buyer.find({});

        console.log("allBuyers GET route: ", buyers); 

        res.json(buyers)
    }   

    catch(e){
        console.log("error: Cannot get all buyers !!", e);        
    }
})

export {router as allBuyers}