import express from "express";
import session from "express-session";
import FileStore from "session-file-store";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";

dotenv.config();
if (!process.env.PORT) {
  throw new Error("PORT environment variable is not set");
}

const app = express();
const PORT = process.env.PORT;

const FileStoreSession = FileStore(session);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new FileStoreSession(),
    cookie: {
      httpOnly: true,
      secure: false, // set to true in production; only if using HTTPS
      // maxAge: 1000 * 60 * 60, // 1 hour session
    },
  })
);

app.use((req, res, next) => {
  console.log("Session Data:", req.session);
  next();
});

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
