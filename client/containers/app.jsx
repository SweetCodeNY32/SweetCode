import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import MUI components
import { Box } from '@mui/material';
// Import local components
import LoginPage from './LoginPage';
import HomePage from './HomePage';

export default function App() {
  const [user, setUser] = useState({
    username: '',
    nodeId: '0',
    avatarUrl: '',
  });

  /**
   * Upon rendering the application, and upon any following events taken within the application,
   * send a GET request to the backend server and check if the user's authentication token is valid.
   */
  useEffect(() => {
    async function checkAuthentication() {
      const response = await axios.get('/api/checkauth');
      if (response.status === 200) {
        console.log(response);
        setUser({
          username: response.data.username,
          nodeId: response.data.node_id,
          avatarUrl: response.data.avatar_url,
        });
      } else {
        setUser({
          username: '',
          nodeId: '0',
          avatarUrl: '',
        });
      }
    }
    checkAuthentication();
  }, []);

  /**
   * Depending on whether a user is logged in via GitHub, render the login page OR their home page.
   */
  return (
    <Box
      id="app"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {user.username === ''
        ? <LoginPage />
        : <HomePage username={user.username} nodeId={user.nodeId} avatarUrl={user.avatarUrl} />}
    </Box>
  );
}
