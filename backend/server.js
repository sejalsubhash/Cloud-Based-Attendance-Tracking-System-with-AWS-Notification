require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

// const punchRoutes = require("./routes/punch");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* API Routes */
app.use("/api", punchRoutes);

/* Serve Frontend Build */
const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* Server Port */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});