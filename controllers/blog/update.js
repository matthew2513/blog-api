import db from "../../db/db.js";

async function updatePost(req, res) {
  try {
    const userId = req.session.userId;
    const postId = req.params.id;

    const { title, author, description, summary } = req.body;

    await db.read();

    const post = db.data.posts.find((p) => p.postId === postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to edit this post" });
    }

    if (title) post.title = title;
    if (author) post.author = author;
    if (description) post.description = description;
    if (summary) post.summary = summary;

    await db.write();

    res.status(201).json(post);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { updatePost };
