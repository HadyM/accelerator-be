const express = require("express");
const cookingstyles = express.Router();
const {
  getAllCookingStyles,
  getCookingStyle,
} = require("../queries/cookingStyles");

cookingstyles.get("/", async (req, res) => {
  const allCookingStyles = await getAllCookingStyles();
  res.status(200).json(allCookingStyles);
});

cookingstyles.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cookingStyle = await getCookingStyle(id);
  res.status(200).json(cookingStyle);
});

module.exports = cookingstyles;
