function validateLogin(req, res, next) {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res
      .status(400)
      .json({ message: "Username/Email and password are required." });
  }

  next();
}

export { validateLogin };
