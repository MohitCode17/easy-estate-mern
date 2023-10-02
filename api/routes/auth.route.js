import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// --------------- Sign-up Route ----------------
router.post("/signup", signup);

// --------------- Sign-up Route ----------------
router.post("/signin", signin);

export default router;
