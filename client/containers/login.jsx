import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const Login = (props) => {

  async function handleLogin(){
    const response = await axios.get('/api/login');
    // // let username = response.username;
    // // let userId = response.userId;

    // props.setUser({
    //   username,
    //   userId
    // });
  }

  return(
    <div className="login">
      <h1>Sweet Code</h1>

      <Button
        onClick={handleLogin}
        variant="outlined"
      >Log in with Github here!</Button>

    </div>
  )

}

export default Login;