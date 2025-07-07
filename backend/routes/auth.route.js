import express from "express";
import { login, logout, signup, refreshToken } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

router.get("/refresh-token", refreshToken);
// router.get("/profile", getProfile);

export default router;

