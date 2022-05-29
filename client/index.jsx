import React from 'react';
import { createRoot } from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './containers/App';
import './styles.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5757',
    },
    secondary: {
      main: '#A6ECF4',
    },
  },
});

const root = createRoot(document.querySelector('#root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
