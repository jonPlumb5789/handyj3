import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
);
