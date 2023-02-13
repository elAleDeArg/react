import dotenv from "dotenv";
dotenv.config();

export const mongodb_uri = process.env.MONGODB_URI;
  
export const port = process.env.PORT || 4000;
