const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;
// Import controllers
const authController = require('./controllers/authController');
const dbController = require('./controllers/dbController')
require('dotenv').config;
const clientId = process.env.CLIENT_ID;
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/api/login', async (req, res) => {
  // const url = `https://github.com/login/oauth/authorize?client_id=${clientId}`
  const url = 'https://github.com/login/oauth/authorize?client_id=d10f7d7ad9cf301504bc';
  console.log('this is doing something?');
  return res.redirect(url);
});

// app.get('/api/login', authController.logIn, async (req, res) => {
//     res.cookie('auth', res.locals.access_token);
//     console.log('you are in api/login route')
//     return res.status(201).json();

// });

app.get(
  '/signin/github-callback',
  authController.getToken,
  dbController.addNewUser,
  async (req, res) => {
    res.cookie('auth', res.locals.accessToken);
    return res.status(200).redirect('http://localhost:9000/');
  }
);

app.get('/api/checkauth', authController.getUser, (req, res) => {
  if (res.locals.gh_username) {
    return res.status(200).json({
      username: res.locals.gh_username,
      node_id: res.locals.gh_node_id,
      avatar_url: res.locals.gh_avatar_url,
    });
  }
  return res.sendStatus(401);
});

// Creates a new study guide.
app.post(
  '/api/studyguide/create',
  dbController.createStudyGuide,
  (req, res) => {
    return res.sendStatus(200);
  }
)

app.post(
  '/api/studyguide/category',
  
)

// Retrieves a user's study guides.
app.post(
  '/api/studyguide',
  dbController.getUserStudyGuides,
  dbController.getStudyGuideCategories,
  (req, res) => {
    const { studyGuidesArray } = res.locals;
    console.log(studyGuidesArray);
    return res.status(201).json(studyGuidesArray);
  }
);

app.post(
  '/api/problems/create',
  (req, res) => {
    return res.status(201).json();
  }
)

// Retrieves problems from a user's specific study guide
app.post('/api/problems', (req, res) => {
    return res.status(201).json();
});

'/',
  (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
