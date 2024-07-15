import { app } from "./server.js";

// launch the server on random port
const port = process.env.PORT || 3000;

// enable debug logs
process.env.DEBUG = "express:*";

// trace all requests and log them to terminal
app.use((req, res, next) => {
  console.log("Request received", req.method, req.url);
  next();
});

// trace all warnings and errors and log them to terminal
app.use((err, req, res, next) => {
  console.error("Error occurred", err);
  next(err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
