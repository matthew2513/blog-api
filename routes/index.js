import express from "express";
import { userAuthentication } from "../middlewares/authMiddleware.js";
import { validatePostData } from "../middlewares/validation/blog/validatePost.js";
import { readAllPosts } from "../controllers/blog/read/readAllPosts.js";
import { readPost } from "../controllers/blog/read/readPost.js";
import { readUserPosts } from "../controllers/blog/read/readUserPosts.js";
import { postBlog } from "../controllers/blog/post.js";

const router = express.Router();

//read all posts
router.get("/", userAuthentication, readAllPosts);

//read user specific posts
router.get("/blog/filter", userAuthentication, readUserPosts);

//read a post
router.get("/blog/:id", userAuthentication, readPost);

//create
router.post("/submit", userAuthentication, validatePostData, postBlog);

//update

//delete

export default router;
