import express from "express";
import { userRegister } from "../controllers/auth/register.js";
import { userLogin, userLogout } from "../controllers/auth/login.js";
import { userAuthentication } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.post("/logout", userAuthentication, userLogout);

export default router;
