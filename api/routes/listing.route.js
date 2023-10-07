import express from "express";
import {
  createListing,
  deleteListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// ---------- create-listing property route -----------
router.post("/create", verifyToken, createListing);

// ---------- create-listing property route -----------
router.delete("/delete/:id", verifyToken, deleteListing);

export default router;
