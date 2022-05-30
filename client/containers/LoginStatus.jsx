import React, { useState } from 'react';
// Import React GitHub button
import GitHubButton from 'react-github-btn';
// Import MUI components
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';

/**
 * TODO: Add a settings modal to this component. To start, could allow user to change colors
 * of their application (primary and secondary, see index.jsx to see how those are established).
 * Could also add a dark/light mode toggle the same way. Developing in dark mode.
 */
// TODO: add props validation
// eslint-disable-next-line react/prop-types
export default function LoginStatus({ username, avatarUrl, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

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
      {/* User-specific information */}
      <Box
        id="user-info"
        sx={{
          py: 0.5,
          px: 1,
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Button
          onClick={handleMenuOpen}
          color="primary"
          sx={{
            maxWidth: '40px',
            maxHeight: '40px',
            minWidth: '40px',
            minHeight: '40px',
          }}
        >
          <Avatar
            variant="rounded"
            alt={username}
            src={avatarUrl}
            sx={{
              width: '32px',
              height: '32px',
            }}
          />
        </Button>
        {/* TODO: make menu open upwards to prevent overlap on user information */}
        <Menu
          id="user-menu"
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => {
            handleMenuClose();
            handleLogout();
          }}
          >
            Logout
          </MenuItem>
        </Menu>
        <Typography
          sx={{
            px: 1,
          }}
        >
          {username}
        </Typography>
      </Box>
      <Divider orientation="vertical" />
      {/* Information about our application */}
      <Box
        id="app-info"
        sx={{
          px: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <GitHubButton
          href="https://github.com/SweetCodeNY32/SweetCode"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star SweetCodeNY32/SweetCode on GitHub"
        >
          Star
        </GitHubButton>
      </Box>
    </Box>
  );
}
