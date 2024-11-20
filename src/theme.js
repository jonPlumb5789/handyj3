import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Dark blue
    },
    secondary: {
      main: '#FF6D16;', // Orange
    },
  },
  typography: {
    h2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      color: '#FF6D16', // Orange headings
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      color: '#003366', // Dark blue body text
    },
  },
});

export default theme;
