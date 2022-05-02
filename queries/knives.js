const db = require("../db/dbConfig.js");

const getAllKnives = async () => {
  try {
    const allKnives = await db.any(`SELECT * FROM knives`);
    return { success: true, payload: allKnives };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getKnife = async (id) => {
  try {
    const knife = await db.one(`SELECT * FROM knives WHERE id = $1`, id);
    return { success: true, payload: knife };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllKnives,
  getKnife,
};
