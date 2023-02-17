
import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "../server/routes/posts.routes.js";
const app = express();
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(postsRoutes);


export default app