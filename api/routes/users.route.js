import express from "express";
import { test } from "../controllers/users.controller.js";

const router = express.Router();

// Test API
router.get("/test", test);

export default router;
