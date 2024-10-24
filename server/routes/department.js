import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import { addDepartment } from "../controllers/departmentController.js";

const router = express.Router();

router.post("/add", authMiddleware, addDepartment);

export default router;
