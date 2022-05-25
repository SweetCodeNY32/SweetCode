const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const authController = require('./controllers/authController');
require('dotenv').config
const clientID = process.env.CLIENT_ID;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', authController.logIn, (req, res) => {
    return res.status(200).redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
  });

app.get('/api/login', authController.logIn, (req, res) => {
    res.cookie('auth', res.locals.access_token);
    console.log('you are in api/login route')
    return res.status(201).json();
});

app.get('/signup/github/callback', authController.getToken, authController.getUser, (req, res) => {
    res.cookie('auth', res.locals.access_token);
    console.log('callback cookies', req.cookies);
    return res.status(200).redirect('http://localhost:3000');
  });
  
  app.get('/api/getUserData', authController.checkForCookie, authController.getUser, (req, res) => {
    console.log(res.locals.github)
    return res.status(200).send(res.locals.github);
  })

//Handles request when user logs in
// app.use('/api/signin');

//Adds the first study guide
app.post('/api/studyguide', (req, res) => {
    return res.status(201).json()

});

//Adds new problems to the study guide
app.post('/api/problems', (req, res) => {
    return res.status(201).json()
});

// ('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

app.use('*', (req,res) => {
    res.status(404).send('Not Found')
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occured" },
    };
    const errorObj = {...defaultErr, ...err};
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app; 