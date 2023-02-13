import mongoose from "mongoose";
import { mongodb_uri } from "./config.js";

mongoose.set("strictQuery", true);

export async function connectDB() {
  try {
    const db = await mongoose.connect(mongodb_uri);
    console.log("conected to ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
