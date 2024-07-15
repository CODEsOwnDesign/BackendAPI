// express to create a server
import express from "express";
// dotenv to load environment variables
import dotenv from "dotenv";
// import the process module
dotenv.config();
// hello function from api/hello.js
import hello from "./api/todo/hello.js";

const app = express();

// static files
app.use(express.static("public"));

app.get("/", hello);

export { app };
