import db from "../../db/db.js";
import { v4 as uuidv4 } from "uuid";
import currentDate from "../../utils/currentDate.js";

async function postBlog(req, res) {
  try {
    const userId = req.session.userId;
    const { title, author, description, summary } = req.body;

    const newPost = {
      postId: uuidv4(),
      userId,
      title,
      author,
      description,
      summary,
      date: currentDate(),
    };

    await db.read();
    db.data.posts.push(newPost);
    await db.write();

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.error("Error posting blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { postBlog };
