const express = require("express");
const knives = express.Router();
const { getAllKnives, getKnife } = require("../queries/knives");

knives.get("/", async (req, res) => {
  const allKnives = await getAllKnives();
  res.status(200).json(allKnives);
});

knives.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneKnife = await getKnife(id);
  res.status(200).json(oneKnife);
});

module.exports = knives;
