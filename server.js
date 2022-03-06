import express from "express";
import dotenv from "dotenv";

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

app.get("/", (req, res) => {
  res.send("Welcome Express");
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job", jobRoute);

dbConnection(process.env.MONGO_URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on localhost:${PORT}`);
});
