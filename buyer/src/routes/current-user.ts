import express, { Request, Response } from "express";
import { auth } from "../helpers/middlewares/auth";

const router = express.Router();

// router.get("/api/buyers/currentUser", auth, async (req: Request, res: Response) => {
//   res.send(buyer);
// });

export { router as currentUserRouter };
