const db = require("../db/dbConfig.js");

const getAllRecipes = async () => {
  try {
    const allRecipes = await db.any(`SELECT * FROM recipes`);
    return { success: true, payload: allRecipes };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getRecipe = async (id) => {
  try {
    const recipe = await db.one(`SELECT * FROM recipes WHERE id = $1`, id);
    return { success: true, payload: recipe };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const addRecipe = async (recipe) => {
  const { title, image, description, time, ingredients, instruction } = recipe;
  try {
    const newRecipe = await db.one(
      `INSERT INTO recipes
            (title, image, description, time, ingredients, instruction)
            VALUES
            ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
      [title, image, description, time, ingredients, instruction],
    );
    return { success: true, payload: newRecipe };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateRecipe = async (id, recipe) => {
  const { title, image, description, time, ingredients, instruction } = recipe;
  try {
    const updatedRecipe = await db.one(
      `UPDATE recipes SET
            title = $1, image = $2, description = $3, time = $4, ingredients = $5, instruction = $6
            WHERE id = $7
            RETURNING *`,
      [title, image, description, time, ingredients, instruction, id],
    );
    return { success: true, payload: updatedRecipe };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteRecipe = async (id) => {
  try {
    const deletedRecipe = await db.one(
      `DELETE FROM recipes
            WHERE id = $1
            RETURNING *`,
      id,
    );
    return { success: true, payload: deletedRecipe };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
