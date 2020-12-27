import express from "express";

const router = express.Router();

router.post("/api/buyers/signOut", (req, res) => {
  res.send("from signOut");
});

export { router as signOutRouter };
