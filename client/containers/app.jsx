import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  const [username, setUsername] = useState('');


  if (username === ''){
    return (
      <Login />
    );
  }

  else return(
    <div class="logged-in">
      <Sidebar />
      <StudyGuide />
    </div>

  );
}


export default App;