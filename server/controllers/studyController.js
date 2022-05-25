/**
 @description: studyController provides middleware provides study guide middleware for the user
 */
 require('dotenv').config();
 const axios = require('axios');
 const authController = {};
 const clientId = process.env.CLIENT_ID;

/*Middleware for /api/studyguide */
authController.logIn = async (req, res, next) => {
   
    try {
      const response = await axios.get('/api/studyguide');
     
      res.locals.accessToken = access_token;
      console.log('you are in study guide controller');
      // console.log("this is the response", response);
      return next();
    } catch (err) {
      return next({
        log: `Could not get study guides. Err: ${err.message}`,
        status: 500,
        message: { err: 'An error occurred' },
      });
    }
  };
  
module.exports = studyController;