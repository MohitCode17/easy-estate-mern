import express from "express";
import {
  deleteProfile,
  test,
  updateUserProfile,
} from "../controllers/users.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Test API
router.get("/test", test);

// ------------ update profile route ------------
router.post("/update/:id", verifyToken, updateUserProfile);

// ------------ delete profile route ------------
router.delete("/delete/:id", verifyToken, deleteProfile);

export default router;
