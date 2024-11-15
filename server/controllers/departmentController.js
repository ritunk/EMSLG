import Department from "../models/Department.js";

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    return res.status(200).json({ success: true, departments });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "get departments server error" });
  }
};

const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;

    const newDepartment = new Department({
      dep_name,
      description,
    });

    await newDepartment.save();

    return res.status(200).json({ success: true, department: newDepartment });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Add department server error" });
  }
};

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const department = await Department.findById({ _id: id });

    return res.status(200).json({ success: true, department });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "edit department server error" });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const { dep_name, description } = req.body;

    const updateDep = await Department.findByIdAndUpdate(
      { _id: id },
      {
        dep_name,
        description,
      }
    );

    return res.status(200).json({ success: true, updateDep });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "update department error" });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteDep = await Department.findById({ _id: id });

    await deleteDep.deleteOne();

    return res.status(200).json({ success: true, deleteDep });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "delete department error" });
  }
};

export {
  addDepartment,
  getDepartments,
  updateDepartment,
  getDepartment,
  deleteDepartment,
};
