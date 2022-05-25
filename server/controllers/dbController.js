/**
 @description: dbController provides middleware functionality to read and
 write to the SweetCode database.
 */
const db = require('../db');

const dbController = {};

/**
 * Add a new user to the database. If the user already exists in the database,
 * simply find them by their gh_node_id and update their gh_username.
 * This is important in the situation that a user updates their GitHub username.
 * We want those changes to be reflected in our database.
 * If the user is not already in the database, create a new Users row for them.
 */
dbController.addNewUser = async (req, res, next) => {
  try {
    let queryString = `SELECT * FROM users WHERE users.gh_node_id = $1;`
    const dbResponse = await db.query(queryString, [res.locals.gh_node_id]);
    // If the user does not exist, add them to the database.
    if (dbResponse.rows.length === 0) {
      queryString = `INSERT INTO users (gh_username, gh_node_id) values ($1, $2);`
      await db.query(queryString, [res.locals.gh_username, res.locals.gh_node_id]);
      console.log (`Successfully added ${res.locals.gh_username} into users database`);
    // If the user does exist, update their gh_username (it might change)
    } else {
      queryString = `UPDATE users SET gh_username=$1 WHERE gh_node_id=$2;`;
      await db.query(queryString, [res.locals.gh_username, res.locals.gh_node_id]); 
      console.log (`Successfully updated ${res.locals.gh_username} in the users database`);
    }
    return next();
  } catch (err) {
    return next({
      log: `Error in dbController.addNewUser Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

/**
 * Retrieve a list of the current user's study guides.
 */
dbController.getUserStudyGuides = async (req, res, next) => {
  const { userId } = req.body;
  try {
    let queryString = `SELECT _id FROM users WHERE gh_node_id=$1`
    let response = await db.query(queryString, [userId]);
    const id = response.rows[0]._id;
    queryString = `SELECT * FROM study_guides WHERE user_id=$1;`
    response = await db.query(queryString, [id]);
    const studyGuides = response.rows;
    const studyGuidesArray = [];
    for (let i = 0; i < studyGuides.length; i += 1) {
      studyGuidesArray.push({
        name: studyGuides[i].name,
        categories: [],
      })
    }
    res.locals.studyGuidesArray = studyGuidesArray;
    res.locals.studyGuides = studyGuides;
    return next();
  } catch (err) {
    return next({
      log: `Error in dbController.getUserStudyGuides Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

/**
 * Retrieve a for each study guide, retrieve the associated list of categories.
 */
dbController.getStudyGuideCategories = async (req, res, next) => {
  const { studyGuides } = res.locals;
  try {
    /**
     * TODO: iterate through the studyGuides rows (pulled directly from the database).
     * For each one, add a query based on study guide _id to search for corresponding categories
     * for the study guide. Push these into the studyGuidesArray.
     * 
     * Cannot be done until an add study guide endpoint is created.
     */
    return next();
  } catch (err) {
    return next({
      log: `Error in dbController.getStudyGuideCategories Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

/**
 * Creates a new study guide based on the user's id.
 */
dbController.createStudyGuide = async (req, res, next) => {
  const { userId } = req.body;
  console.log(userId);
  try {
    return next();
  } catch (err) {
    return next({
      log: `Error in dbController.createStudyGuide Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

module.exports = dbController;