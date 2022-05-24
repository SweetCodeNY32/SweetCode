const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config

const authController = require('./controllers/authController');
const { append } = require('express/lib/response');

app.get('/api/github-callback', authController.getToken, authController.getUser, (req, res) => {
    return res.status(200); //should I send back any data ie res.locals
})