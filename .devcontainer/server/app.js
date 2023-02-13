
import express from "express";
import postsRoutes from "../server/routes/posts.routes.js";
const app = express();
app.use(express.json())
app.use(postsRoutes);


export default app