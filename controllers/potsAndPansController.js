const express = require("express");
const potsandpans = express.Router();
const { getAllPotsAndPans, getPotAndPan } = require("../queries/potsAndPans");

potsandpans.get("/", async (req, res) => {
  const allPotsAndPans = await getAllPotsAndPans();
  res.status(200).json(allPotsAndPans);
});

potsandpans.get("/:id", async (req, res) => {
  const { id } = req.params;
  const potAndPan = await getPotAndPan(id);
  res.status(200).json(potAndPan);
});

module.exports = potsandpans;
