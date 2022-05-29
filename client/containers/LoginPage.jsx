import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';

export default function Login() {
  return (
    <Box
      id="login-page"
      bgcolor="primary.main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Tooltip title="Sign in via GitHub to get started" arrow>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          href="https://github.com/login/oauth/authorize?client_id=d10f7d7ad9cf301504bc"
        >
          <Box
            component="img"
            alt="sweet-code-logo"
            src="../sweet-code.png"
          />
        </Button>
      </Tooltip>
    </Box>
  );
}
