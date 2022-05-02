const express = require("express");
const cookingstyle = express.Router();
const {
  getAllCookingStyles,
  getCookingStyle,
} = require("../queries/cookingStyles");

cookingstyle.get("/", async (req, res) => {
  const allCookingStyles = await getAllCookingStyles();
  res.status(200).json(allCookingStyles);
});

cookingstyle.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cookingStyle = await getCookingStyle(id);
  res.status(200).json(cookingStyle);
});

module.exports = cookingstyle;
