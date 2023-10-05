import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const test = (req, res) => {
  res.json({
    message: "API working fine",
  });
};

// ---------- update user profile controller -----------

export const updateUserProfile = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own profile"));

  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
