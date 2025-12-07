import mongoose from "mongoose";
import app from "./index.js";
import { config } from "dotenv";

config(); // Load .env

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("📦 MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log(" Database connection failed:", error);
  }
}

main();
