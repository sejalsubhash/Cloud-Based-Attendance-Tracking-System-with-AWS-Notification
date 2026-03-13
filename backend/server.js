require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const punchRoutes = require("./routes/punch");

const app = express();

app.use(cors());
app.use(express.json());

/* API routes */
app.use("/api", punchRoutes);

/* Serve React build */
const frontendPath = path.join(__dirname, "../frontend/build");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});