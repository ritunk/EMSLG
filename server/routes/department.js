import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  addDepartment,
  getDepartments,
  updateDepartment,
  getDepartment,
  deleteDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

router.post("/add", authMiddleware, addDepartment);
router.get("/", authMiddleware, getDepartments);
router.get("/:id", authMiddleware, getDepartment);
router.put("/:id", authMiddleware, updateDepartment);
router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
