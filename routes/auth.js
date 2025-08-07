import express from "express";
import { userRegister } from "../controllers/auth/register.js";
import { userLogin, userLogout } from "../controllers/auth/login.js";
import { userAuthentication } from "../middlewares/authMiddleware.js";
import { validateLogin } from "../middlewares/validation/auth/validateLogin.js";
import { validateRegister } from "../middlewares/validation/auth/validateRegister.js";

const router = express.Router();

router.post("/register", validateRegister, userRegister);

router.post("/login", validateLogin, userLogin);

router.post("/logout", userAuthentication, userLogout);

export default router;
