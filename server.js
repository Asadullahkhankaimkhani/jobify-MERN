import express from "express";

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Express");
});

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on localhost:${PORT}`);
});
