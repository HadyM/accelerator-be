const express = require("express");
const cuttingstyles = express.Router();
const {
  getAllCuttingStyles,
  getCuttingStyle,
} = require("../queries/cutStyles.js");

cuttingstyles.get("/", async (req, res) => {
  const allCuttingStyles = await getAllCuttingStyles();
  res.status(200).json(allCuttingStyles);
});

cuttingstyles.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cuttingStyle = await getCuttingStyle(id);
  res.status(200).json(cuttingStyle);
});

module.exports = cuttingstyles;
