const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
