import db from "../../../db/db.js";

async function readAllPosts(req, res) {
  try {
    await db.read();
    const posts = db.data.posts;

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error reading blog posts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { readAllPosts };
