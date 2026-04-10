const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Flock API is running...");
});

app.post("/vote", (req, res) => {
  const { user, value } = req.body;
  // placeholder logic (connect to blockchain later)
  res.json({
    message: "Vote submitted",
    data: { user, value }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
