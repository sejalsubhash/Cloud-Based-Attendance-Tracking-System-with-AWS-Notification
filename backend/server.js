const express = require("express");
const cors = require("cors");
const path = require("path");

const punchRoutes = require("./routes/punch");

const app = express();

app.use(cors());
app.use(express.json());

/* API Routes */

app.use("/", punchRoutes);

/* Serve React Frontend */

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});