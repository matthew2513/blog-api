function userAuthentication(req, res, next) {
  if (!req.session.userId || !req.session.username) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}

export { userAuthentication };
