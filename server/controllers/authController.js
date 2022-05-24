/**
 @description: authController provides middleware functionality for authenticating users via GitHub OAuth
 */
require('dotenv').config()
const axios = require('axios');
const authController = {};
const clientID = process.env.CLIENT_ID;

/*Middleware for /login */
authController.logIn = async (req, res, next) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:3000/api/login&scope=read:user`;
  try {
    const response = await axios(url, {
      headers: {
      accept: 'application/json',
      'content-type': 'text/json'
      }
    })
    console.log('you are in login controller')
    return next();

  } catch (err) {
    return next({
      log: `Could not log in. Err: ${err.message}`,
      status: 500, 
      message: { err: 'An error occurred' }
    });
  }
}

/*Middleware for the /signup route */
authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`;
  try {
        const response = await axios.post(url, {
          headers: {
          accept: 'application/json',
          'content-type': 'text/json'
          }
        })
        access_token = response.data.access_token;
        res.locals.accessToken = access_token;
        console.log('you are in getToken controller')
        return next();
      } catch (err) {
                return next({
                    log: `Could not get token. Err: ${err.message}`,
                    status: 500, 
                    message: { err: 'An error occurred' }, 
      });
    }
}

authController.getUser = async (req, res, next) => {
  const url = `https://api.github.com/user`
    try {
      const response = await axios.get(url, {
              headers: {
              Authorization: 'token ' + access_token
              }
            })
              // res.render('/',{ userData: response.data });
      // res.locals.username = response.login.username
      console.log('this is the response:', response)
      console.log('you are in getUser controller')
      //node_id
      return next(); 
    } catch (err) {
        return next({
          log: `Could not get user. Err: ${err.message}`,
          status: 500,
          message: { err: 'An error occurred' },
        });
    }  
}

module.exports = authController;