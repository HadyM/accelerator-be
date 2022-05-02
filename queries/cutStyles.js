const db = require("../db/dbConfig.js");

const getAllCuttingStyles = async () => {
  try {
    const allCuttingStyles = await db.any(`SELECT * FROM cut_styles`);
    return { success: true, payload: allCuttingStyles };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getCuttingStyle = async (id) => {
  try {
    const cuttingStyle = await db.one(
      `SELECT * FROM cut_styles WHERE id = $1`,
      id,
    );
    return { success: true, payload: cuttingStyle };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllCuttingStyles,
  getCuttingStyle,
};
