import express from "express";
import { userAuthentication } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/blog", userAuthentication, (req, res) => {
  console.log(req.session.userId, req.session.username);
  res.send("Protected");
});

export default router;
