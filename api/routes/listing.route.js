import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// ---------- create-listing property route -----------
router.post("/create", verifyToken, createListing);

// ---------- delete-listing property route -----------
router.delete("/delete/:id", verifyToken, deleteListing);

// ---------- update-listing property route -----------
router.post("/update/:id", verifyToken, updateListing);

// --------- get listing based on id -------------
router.get("/get/:id", getListing);

// --------- get all listings based on search query -------------
router.get("/get", getListings);

export default router;
