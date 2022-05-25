import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {
  async function handleLogin() {
    console.log('button clicked');

    
    // response = await axios.get(
    //   '/api/checkauth'
    // );
    // props.setUser({
    //   username: res.locals.gh_username,
    //   userId:res.locals.gh_node_id
    // })

    // console.log(response);
    // let username = response.username;
    // // let userId = response.userId;

    // props.setUser({
    //   username,
    //   userId
    // });
    // href='https://github.com/login/oauth/authorize?client_id=d10f7d7ad9cf301504bc'
  }

  return (
    <div className="login">
      <h1>Sweet Code</h1>

      <Button variant="outlined" href='https://github.com/login/oauth/authorize?client_id=d10f7d7ad9cf301504bc'>
        Log in with Github here!
      </Button>
    </div>
  );
};

export default Login;
