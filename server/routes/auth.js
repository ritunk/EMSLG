import express from "express";
import { login } from "../controllers/authController.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
import { verify } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.get("/verify", AuthMiddleware, verify);

export default router;
