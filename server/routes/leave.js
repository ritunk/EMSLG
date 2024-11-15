import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";

import {
  addLeave,
  getAllLeaves,
  getLeaves,
  updateLeaveStatus,
} from "../controllers/leaveController.js";

const router = express.Router();

router.post("/add", authMiddleware, addLeave);
router.get("/:id", authMiddleware, getLeaves);
router.get("", authMiddleware, getAllLeaves);
router.put("/update", authMiddleware, updateLeaveStatus);

export default router;
