import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// --------------- Sign-up Route ----------------
router.post("/signup", signup);

export default router;
