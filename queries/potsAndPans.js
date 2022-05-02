const db = require("../db/dbConfig.js");

const getAllPotsAndPans = async () => {
  try {
    const allPotsAndPans = await db.any(`SELECT * FROM pots_pans`);
    return { success: true, payload: allPotsAndPans };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getPotAndPan = async (id) => {
  try {
    const potAndPan = await db.one(`SELECT * FROM pots_pans WHERE id = $1`, id);
    return { success: true, payload: potAndPan };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllPotsAndPans,
  getPotAndPan,
};
