import express, { Request, Response } from "express";
import { Buyer } from "../models/buyerModel";

const router = express.Router();

const app = express();

router.get("/api/buyers/currentUser/:id", async (req: Request, res: Response) => {
  const _id = req.params.id;
  const buyer = await Buyer.findById({_id});

  console.log(buyer);  

  res.send(buyer);
});

export { router as currentUserRouter };
