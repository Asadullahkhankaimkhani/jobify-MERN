import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Express");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on localhost:${PORT}`);
});
