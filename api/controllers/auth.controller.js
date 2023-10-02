import User from "../models/User.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const isUser = await User.findOne({ email });

    if (isUser) {
      return next(errorHandler(403, "Username or Email already exists"));
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    // save user
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
