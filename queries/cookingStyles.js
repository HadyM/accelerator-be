const db = require("../db/dbConfig.js");

const getAllCookingStyles = async () => {
  try {
    const allCookingStyles = await db.any(`SELECT * FROM cooking_styles`);
    return { success: true, payload: allCookingStyles };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getCookingStyle = async (id) => {
  try {
    const cookingStyle = await db.one(
      `SELECT * FROM cooking_styles WHERE id = $1`,
      id,
    );
    return { success: true, payload: cookingStyle };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllCookingStyles,
  getCookingStyle,
};
