// import Employee from "../models/Employee.js";
// import Leave from "../models/Leave.js";

// const addLeave = async (req, res) => {
//   try {
//     const { userId, leaveType, startDate, endDate, reason } = req.body;
//     const employee = await Employee.findOne({ userId });

//     const newLeave = new Leave({
//       employeeId: employee._id,
//       leaveType,
//       startDate,
//       endDate,
//       reason,
//     });

//     await newLeave.save();
//     return res.status(200).json({ success: true });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, error: "leave add server error" });
//   }
// };

// const getLeaves = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({ userId: id });

//     const leaves = await Leave.find({ employeeId: employee._id });

//     return res.status(200).json({ success: true, leaves });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ success: false, error: "leave add server error" });
//   }
// };

// export { addLeave, getLeaves };

// LeaveController.js
import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";

// Employee applies for leave
// const applyForLeave = async (req, res) => {
//   try {
//     const { startDate, endDate, reason } = req.body;
//     const employeeId = req.user.id; // Assuming req.user contains the logged-in user

//     const newLeave = new Leave({
//       employeeId,
//       startDate,
//       endDate,
//       reason,
//       status: "Pending",
//     });

//     await newLeave.save();

//     res.status(201).json({ success: true, message: "Leave request submitted" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, error: "Failed to submit leave request" });
//   }
// };

// Admin approves or rejects a leave
const updateLeaveStatus = async (req, res) => {
  try {
    const { leaveId, status } = req.body;
    if (!["Approved", "Rejected", "Pending"].includes(status)) {
      return res.status(400).json({ success: false, error: "Invalid status" });
    }

    const leave = await Leave.findById(leaveId);
    if (!leave) {
      return res.status(404).json({ success: false, error: "Leave not found" });
    }

    leave.status = status;
    await leave.save();

    res.status(200).json({
      success: true,
      message: `Leave ${status.toLowerCase()} successfully`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to update leave status" });
  }
};

// Add leave for an employee
const addLeave = async (req, res) => {
  try {
    const { userId, leaveType, startDate, endDate, reason } = req.body;
    const employee = await Employee.findOne({ userId });

    const newLeave = new Leave({
      employeeId: employee._id,
      leaveType,
      startDate,
      endDate,
      reason,
    });

    await newLeave.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "leave add server error" });
  }
};

// Get leaves for an employee
const getLeaves = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ userId: id });

    const leaves = await Leave.find({ employeeId: employee._id });

    return res.status(200).json({ success: true, leaves });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error: "leave add server error" });
  }
};

// export const getAllLeaves = async (req, res) => {
//   try {
//     // Assuming you have a Leave model
//     const leaves = await Leave.find(); // Fetch all leaves from DB
//     res.json({ leaves });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching leaves", error });
//   }
// };

export const getAllLeaves = async (req, res) => {
  try {
    // Use `populate` to include employee data in the response
    const leaves = await Leave.find().populate({
      path: "employeeId",
      populate: [
        { path: "userId", select: "name email" },
        { path: "department", select: "dep_name" }, // Ensure this line is present to populate the department
      ],
    });

    res.status(200).json({ success: true, leaves });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Failed to fetch leaves" });
  }
};

export { updateLeaveStatus, addLeave, getLeaves };
