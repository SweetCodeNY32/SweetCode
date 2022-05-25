



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