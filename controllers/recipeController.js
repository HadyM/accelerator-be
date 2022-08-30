const express = require("express");
const recipes = express.Router();
const {
  getAllRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../queries/recipes");

recipes.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  res.status(200).json(allRecipes);
});

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await getRecipe(id);
  res.status(200).json(recipe);
});

recipes.post("/", async (req, res) => {
  const createdRecipe = await addRecipe(req.body);
  res.status(201).json(createdRecipe);
});

recipes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedRecipe = await updateRecipe(id, req.body);
  res.status(200).json(updatedRecipe);
});

recipes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRecipe = await deleteRecipe(id);
  res.status(200).json(deletedRecipe);
});

module.exports = recipe;
