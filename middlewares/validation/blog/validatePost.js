function validatePostData(req, res, next) {
  const { title, author, description, summary } = req.body;

  if (!title || !author || !description || !summary) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
}

export { validatePostData };
