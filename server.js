// express to create a server
import express from "express";
const app = express();

// dotenv to load environment variables
import dotenv from "dotenv";
dotenv.config();

// root of the server
import root from "./root.js";
// api.js
import api from "./api/api.js";
// todo.js
import todo from "./api/todo/todo.js";
// movie.js
import movie from "./api/movie/movie.js";
// music.js
import music from "./api/music/music.js";

app.get("/", root);
app.use("/api", api);
app.use("/api/movie", movie);
app.use("/api/music", music);
app.use("/api/todo", todo);

export { app };
