import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  addDepartment,
  getDepartments,
} from "../controllers/departmentController.js";

const router = express.Router();

router.post("/add", authMiddleware, addDepartment);
router.get("/", authMiddleware, getDepartments);

export default router;
