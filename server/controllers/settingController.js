import User from "../models/User.js";
import bcrypt from "bcrypt";

const changePassword = async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;

    const user = await User.findById({ _id: userId });

    if (!user) {
      res.status(404).json({ sucess: false, error: "user not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, error: "wrong old password" });
    }

    const hashpassword = await bcrypt.hash(newPassword, 10);

    const newUser = await User.findByIdAndUpdate(
      { _id: userId },
      { password: hashpassword },
      { new: true }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error changing password:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};

export { changePassword };
