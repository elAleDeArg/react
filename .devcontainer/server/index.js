import app from "./app.js";
import { connectDB } from "./db.js";
import { port } from "./config.js";

connectDB();

app.listen(port);
console.log("server is running in port", port);
