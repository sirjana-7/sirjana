const express = require("express");
const router = require("./router.config");  // Import router
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the router for handling routes
app.use("/", router);

module.exports = app;
