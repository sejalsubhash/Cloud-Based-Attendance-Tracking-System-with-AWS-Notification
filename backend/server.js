require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* API test */
app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

/* Serve React build */
const frontendPath = path.join(__dirname, "../frontend/build");

app.use(express.static(frontendPath));

/* React routing fix */
app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});