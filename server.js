import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";

dotenv.config();
if (!process.env.PORT) {
  throw new Error("PORT environment variable is not set");
}

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
