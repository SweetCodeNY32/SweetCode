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

// TODO: add props validation
// eslint-disable-next-line react/prop-types
export default function LoginStatus({ username, avatarUrl }) {
  return (
    <Box
      id="login-status"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar alt={username} src={avatarUrl} />
      <Typography>
        {username}
      </Typography>
    </Box>
  );
}
