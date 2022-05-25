import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Home from './Home.jsx';
import Login from './Login.jsx';

//the main application container
const App = () => {

  //will hold logic for react hooks to manage username and setting username
  const [user, setUser] = useState({
    username: '',
    nodeId: '0'
  });

  useEffect(() => {
    async function checkAuthentication() {
      let response = await axios.get('/api/checkauth')
      console.log('useffect response from checkauth', response)
      if(response.status === 200){
        setUser({
          username: response.data.username, 
          nodeId: response.data.node_id
        })
      } else { 
        setUser({
          username: '', 
          nodeId: '0' 
        })
      }
    }
    checkAuthentication();
    // if(username.length === 0) 
    // if the response status is 200, setUser to (gh_username, gh_node_id);
    // if the response status is 401, setUser to ('', 0)
  }, [])
  

  //if user is not currently signed in, will render the login page
  //login component will have access to setusername 
  if (user.username === ''){
    return (
      <Login setUser={setUser}/>
    );
  }

  //once user is logged in, will render the sidebar and study guide pages
  //will pass in the username into the sidebar to provide personality to the sidebar
  else {
    return(
    <div className="logged-in">
      <Home user={user}/>
    </div>
    );
  }
}


export default App;