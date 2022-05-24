import React from 'react';
import Button from '@mui/material/Button';



const Login = (props) => {


  async function handleLogin(){
    let response = await axios.get('/auth/login');
    let username = response.username;
    let userId = response.userId;

    props.setUser({
      username,
      userId
    });
  }

  return(
    <div class="login">
      <h1>Sweet Code</h1>

      <Button
        onClick={handleLogin}
        variant="outlined"
      >Log in with Github here!</Button>

    </div>
  )

}

export default Login