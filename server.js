// Import route handlers
import root from "./root.js";
import api from "./api/api.js";
import todo from "./api/todo/todo.js";
import movie from "./api/movie/movie.js";
import music from "./api/music/music.js";

export default (req, res) => {
  const { url, method } = req;

  // Root route
  if (url === "/" && method === "GET") {
    return root(req, res);
  }

  // API route
  if (url.startsWith("/api") && method === "GET") {
    return api(req, res);
  }

  // Specific routes under /api
  if (url.startsWith("/api/movie") && method === "GET") {
    return movie(req, res);
  }
  if (url.startsWith("/api/music") && method === "GET") {
    return music(req, res);
  }
  if (url.startsWith("/api/todo") && method === "GET") {
    return todo(req, res);
  }

  // If no route matches, return 404
  res.statusCode = 404;
  res.end("Not Found");
};
