import express from "express";
import { config } from "dotenv";
import { connect } from "./db/db.js";
import userRoutes from "./routes/users.route.js";

// dotenv config
config();
const app = express();

// Database connection
connect();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("Server is running");
});
