import User from "../models/User.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// -------------- sign-up controller -----------------
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

// -------------- sign-ip controller -----------------

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid Email or Passoword"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
