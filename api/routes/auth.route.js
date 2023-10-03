import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// --------------- Sign-up Route ----------------
router.post("/signup", signup);

// --------------- Sign-up Route ----------------
router.post("/signin", signin);

// --------------- Sign-in/Sign-up with google Route ----------------
router.post("/google", google);

export default router;
