import express, { Request, Response } from "express";

const router = express.Router();

router.post("/api/buyers/signOut", (req: Request, res: Response) => {
  res.send("from signOut");
});

export { router as signOutRouter };
