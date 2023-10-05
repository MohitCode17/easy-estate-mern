import express from "express";
import { config } from "dotenv";
import { connect } from "./db/db.js";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

// dotenv config
config();
const app = express();

// Database connection
connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Interval Server Error!!";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Listening to Server
app.listen(8000, () => {
  console.log("Server is running");
});
