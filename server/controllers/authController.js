import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User;

    if (!user) {
      res.status(404).json({ success: false, error: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: "user Not Found" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },

      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export { login };
