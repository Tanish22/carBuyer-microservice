import express, { Request, Response } from "express";
import { auth } from "../helpers/middlewares/auth";

const router = express.Router();

router.post("/api/buyers/signOut", auth, (req: Request, res: Response) => {
  console.log("req from signOut: ", req.body);
  
  res.send("req from signOut: ");
});

export { router as signOutRouter };
