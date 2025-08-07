import express from "express";
import { userAuthentication } from "../middlewares/authMiddleware.js";
import { validatePostData } from "../middlewares/validation/blog/validatePost.js";
import { postBlog } from "../controllers/blog/post.js";

const router = express.Router();

//read
router.get("/blog", userAuthentication, (req, res) => {
  res.send("Protected");
});

//create
router.post("/submit", userAuthentication, validatePostData, postBlog);

//update

//delete

export default router;
