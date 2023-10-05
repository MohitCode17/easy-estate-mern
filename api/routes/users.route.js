import express from "express";
import { test, updateUserProfile } from "../controllers/users.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Test API
router.get("/test", test);

// ------------ update profile route ------------
router.post("/update/:id", verifyToken, updateUserProfile);

export default router;
