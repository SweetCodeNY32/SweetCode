/**
 @description: authController provides middleware functionality for authenticating users via GitHub OAuth
 */
require('dotenv').config();
const axios = require('axios');
const authController = {};
const clientId = process.env.CLIENT_ID;

// Get the access token from GitHub
authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=d10f7d7ad9cf301504bc&client_secret=51ed70df07f3ed3d24393b95752902633d38208b&code=${requestToken}`;
  try {
    const response = await axios.post(url, {
      headers: { Accept: 'application/json', 'Content-Type': 'text/json' },
    });
    const accessToken = response.data.split('=')[1].split('&')[0];
    res.locals.accessToken = accessToken;
    console.log('you are in getToken controller', res.locals.accessToken);
    return next();
  } catch (err) {
    return next({
      log: `Could not get token. Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// Using the access token, get a user's GitHub information (i.e. username, node_id)
authController.getUser = async (req, res, next) => {
  const url = `https://api.github.com/user`;
  const { accessToken } = res.locals;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: 'token ' + accessToken,
      },
    });
    res.locals.gh_username = response.data.login
    res.locals.gh_node_id = response.data.node_id
    return next();
  } catch (err) {
    return next({
      log: `Could not get user. Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// /*Middleware for /login */
// authController.logIn = async (req, res, next) => {
//   // const url = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
//   // res.redirect(`${url}`);
//   // const url = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=http://localhost:3000&scope=read:user`;
//   const url = `https://github.com/login/oauth/authorize?client_id=d10f7d7ad9cf301504bc&redirect_uri=http://localhost:3000/signin/github-callback&scope=read:user`;
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//     access_token = response.data.access_token;
//     res.locals.accessToken = access_token;
//     console.log('you are in login controller');
//     // console.log("this is the response", response);
//     return next();
//   } catch (err) {
//     return next({
//       log: `Could not log in. Err: ${err.message}`,
//       status: 500,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

/*Middleware for checking if cookie is there */
authController.checkForCookie = async (req, res, next) => {
  try {
    if (!req.cookies.auth) {
      console.log('no auth', req.cookies);
      // res.cookie()
    }
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.checkForCookie Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};



module.exports = authController;
