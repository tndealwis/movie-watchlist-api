import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "this is the movie root route" });
});

router.get("/action", (req, res) => {
  res.json({ message: "this is the action movie route" });
});

export default router;
