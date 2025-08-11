import db from "../../db/db.js";

async function deletePost(req, res) {
  try {
    const userId = req.session.userId;
    const postId = req.params.id;

    await db.read();

    const post = db.data.posts.find((post) => post.postId === postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to edit this post" });
    }

    db.data.posts = db.data.posts.filter((p) => p.postId !== postId);

    await db.write();

    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { deletePost };
