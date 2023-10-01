import express from "express";
import { config } from "dotenv";
import { connect } from "./db/db.js";

// dotenv config
config();
const app = express();

// Database connection
connect();

app.listen(8000, () => {
  console.log("Server is running");
});
