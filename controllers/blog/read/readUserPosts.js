import db from "../../../db/db.js";

async function readUserPosts(req, res) {
  const userId = req.session?.userId;

  try {
    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user session found" });
    }

    await db.read();

    const posts = db.data?.posts || [];

    const filteredPosts = posts.filter((post) => post.userId === userId);

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error("Error reading blog posts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { readUserPosts };
