import React from 'react';
// Import MUI components
import {
  Avatar,
  Box,
  Button,
  Divider,
  Tooltip,
  Typography,
} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

// setUser({
//   username: '',
//   nodeId: '0',
//   avatarUrl: '',
// });

// TODO: add props validation
// eslint-disable-next-line react/prop-types
export default function LoginStatus({ username, avatarUrl, setUser }) {
  const handleLogout = () => {
    setUser({
      username: '',
      nodeId: '0',
      avatarUrl: '',
    });
  };

  return (
    <Box
      id="login-status"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Tooltip title="Logout" arrow>
        <Button
          onClick={handleLogout}
          sx={{
            maxWidth: '24px',
            maxHeight: '24px',
            minWidth: '24px',
            minHeight: '24px',
          }}
        >
          <ArrowBackIosNewRoundedIcon fontSize="small" />
        </Button>
      </Tooltip>
      <Avatar alt={username} src={avatarUrl} />
      <Typography>
        {username}
      </Typography>
    </Box>
  );
}
