import express from "express";
import {
  login,
  logout,
  signup,
  refreshToken,
  getProfile,
} from "../controllers/auth.controller.js";

import { protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

router.get("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

export default router;
