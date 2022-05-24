import React, {useState} from 'react';
import Home from './home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//the main application container
const App = () => {
  //will hold logic for react hooks to manage username and setting username
  const [username, setUsername] = useState('');

  //if user is not currently signed in, will render the login page
  //login component will have access to setusername 
  if (username === ''){
    return (
      <Login setUsername={setUsername}/>
    );
  }

  //once user is logged in, will render the sidebar and study guide pages
  //will pass in the username into the sidebar to provide personality to the sidebar
  else return(
    <div class="logged-in">
      <Home username={username}/>
    </div>

  );
}


export default App;