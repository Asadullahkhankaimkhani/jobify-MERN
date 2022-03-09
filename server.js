import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import "express-async-errors";
// import cors from "cors";
// Middleware
import errorHandleMiddleware from "./middleware/error-handling.js";
import notFoundMiddleware from "./middleware/not-found.js";

// Database Function
import { dbConnection } from "./db/connect.js";

// Routes
import authRoute from "./routes/authRoute.js";
import jobRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("Welcome Express");
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API Endpoint" });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job", jobRoute);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

dbConnection(process.env.MONGO_URL);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on localhost:${PORT}`);
});
