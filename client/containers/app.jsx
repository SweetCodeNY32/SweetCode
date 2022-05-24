import React, {useState} from 'react';
import axios from 'axios';
import Home from './home.jsx';
import Login from './login.jsx';

//the main application container
const App = () => {
  //will hold logic for react hooks to manage username and setting username
  const [user, setUser] = useState({
    username: '',
    userId: 0
  });
  

  
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