import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Login = (props) => {
  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   useNavigate(path);
  // }

  async function handleLogin(){
    // await axios.get('/api/login');
    console.log('button clicked')
    // let username = response.username;
    // // let userId = response.userId;
await useNavigate('/api/login')
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