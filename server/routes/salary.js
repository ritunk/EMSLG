import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import { addSalary, getSalary } from "../controllers/salaryController.js";

const router = express.Router();

router.post("/add", authMiddleware, addSalary);
router.get("/:id", authMiddleware, getSalary);

// router.get("/", authMiddleware, getEmployees);
// router.get("/:id", authMiddleware, getEmployee);
// router.put("/:id", authMiddleware, updateEmployee);
// router.get("/department/:id", authMiddleware, fetchEmployeesByDepId);
// router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
