import db from "../../db/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function userRegister(req, res) {
  try {
    const { fName, lName, email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.read();

    const emailExists = db.data.users.find((user) => user.email === email);
    if (emailExists) return res.status(400).json({ message: "Email exists" });

    const usernameExists = db.data.users.find(
      (user) => user.username === username
    );
    if (usernameExists) return res.status(400).json({ message: "User exists" });

    const newUser = {
      userId: uuidv4(),
      fName,
      lName,
      email,
      username,
      password: hashedPassword,
    };

    db.data.users.push(newUser);
    await db.write();

    res.status(201).json({ message: "Registered" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { userRegister };
