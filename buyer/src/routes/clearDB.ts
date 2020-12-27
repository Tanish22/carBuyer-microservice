import express from 'express' ;
import mongoose from 'mongoose';

import {Buyer} from '../models/buyerModel'
const router = express.Router();

router.delete('/api/buyers/deleteBuyer/:id', async (req, res) => {
    const _id = req.params.id
    await Buyer.findByIdAndRemove({_id})
    res.status(200).send({})
})

router.delete("/api/buyers/deleteMany", async (req, res) => {
  await Buyer.deleteMany({});
  res.status(200).send({});
});

export {router as deleteBuyerRouter}