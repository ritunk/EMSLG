import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  addEmployee,
  fetchEmployeesByDepId,
} from "../controllers/employeeController.js";
import {
  upload,
  getEmployees,
  getEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.post("/add", authMiddleware, upload.single("image"), addEmployee);
router.get("/", authMiddleware, getEmployees);
router.get("/:id", authMiddleware, getEmployee);
router.put("/:id", authMiddleware, updateEmployee);
router.get("/department/:id", authMiddleware, fetchEmployeesByDepId);
// router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
