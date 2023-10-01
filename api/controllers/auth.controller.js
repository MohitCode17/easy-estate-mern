import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // hashing password
  const hashPassword = await bcrypt.hash(password, 10);

  // create a new user
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
