import jwt from "jsonwebtoken";
import User from "../models/User";

const verifyUser = (async = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(404)
        .json({ success: false, error: "Token Not Provided" });
    }

    const decoded =  await jwt.verify(token,process.env.JWT_KEY)

    if(!decoded){
      return res.status(404).json({success:false, error:"Token Not Valid"});
    }

    const user  = await User.findById({_id:decoded._id,})
  } catch (error) {}
});
