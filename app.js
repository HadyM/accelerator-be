// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const recipeController = require("./controllers/recipeController");
const cutStylesController = require("./controllers/cutStylesController");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Recipe Book Back End App");
});

app.use("/recipe", recipeController);
app.use("/cuttingstyle", cutStylesController);

app.get("*", (req, res) => {
  res.status(404).send("404: Page Not Found");
});

// EXPORT
module.exports = app;
