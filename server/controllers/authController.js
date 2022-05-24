/**
 @description: authController provides middleware functionality for authenticating users via GitHub OAuth
 */

const axios = require('axios');

const authController = {};
const clientID = 'd10f7d7ad9cf301504bc'
const clientSecret = '553240a3af492eaf421bd3e0a156d93b10c3140b'
/*Middleware for the /signup route */

//should I use async try/catch?
//do we want any data saved to res.locals?

authController.getToken = (req, res, next) => {
    const requestToken = req.query.code;

    axios({method: 'post', 
           url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
           headers: {
               accept: 'application/json'
           }
        }).then((response) => {
            access_token = response.data.access_token
            res.redirect('/')
        }).catch((err) => {
            return next({
                  log: `Could not get token. Err: ${err.message}`,
                  status: 500, 
                  message: { err: 'An error occurred' }, 
            })
          
        })
    }

    //not sure about the endpoint in line 43
authController.getUser = (req, res, next) => {
    
    axios({
        method: 'get', 
        url: `https://api.github.com/user`,
        headers: {
          Authorization: 'token ' + access_token
        }
      }).then((response) => {
        res.render('/',{ userData: response.data });
      }).catch ((err) => {
        return next({
          log: `Could not get user. Err: ${err.message}`,
          status: 500,
          message: { err: 'An error occurred' },
        });
      })
}

module.exports = authController;