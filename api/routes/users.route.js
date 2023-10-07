import express from "express";
import {
  deleteProfile,
  getListings,
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

// ------------ get user listing route ------------
router.get("/listings/:id", verifyToken, getListings);

export default router;
