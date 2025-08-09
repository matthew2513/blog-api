import db from "../../../db/db.js";

async function readPost(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    await db.read();

    const post = db.data.posts.find((p) => p.postId === id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error reading blog posts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { readPost };
