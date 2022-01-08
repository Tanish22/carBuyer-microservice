import express, { Request, Response } from "express";
import { auth } from "../helpers/middlewares/auth";

const router = express.Router();

router.get("/api/buyers/signOut", auth, (req: Request, res: Response) => {
  res.clearCookie("carBuyer-jwt")
     .json({ message: "Logged out successfully !!" })
});

export { router as signOutRouter };
