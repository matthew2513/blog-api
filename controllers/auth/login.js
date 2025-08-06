import db from "../../db/db.js";
import bcrypt from "bcrypt";

async function userLogin(req, res) {
  const { usernameOrEmail, password } = req.body;

  let user =
    db.data.users.find((u) => u.username === usernameOrEmail) ||
    db.data.users.find((u) => u.email === usernameOrEmail);

  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  req.session.userId = user.userId;
  req.session.username = user.username;

  res.json({ message: "Logged in" });
}

function userLogout(req, res) {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });

    res.status(200).json({ message: "Logged out successfully" });
  });
}

export { userLogin, userLogout };
