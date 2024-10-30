import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import { addEmployee } from "../controllers/employeeController.js";
import { upload, getEmployees } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/add", authMiddleware, upload.single("image"), addEmployee);
router.get("/", authMiddleware, getEmployees);
// router.get("/:id", authMiddleware, getDepartment);
// router.put("/:id", authMiddleware, updateDepartment);
// router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
