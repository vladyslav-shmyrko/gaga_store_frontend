'use client';

import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {
    background: {
      default: '#201E2C',
      // default: '#0072BD',
      paper: '#191922',
    },
    primary: {
      main: '#191922',
    },
    secondary: {
      main: '#ffffff', // white
    },
    info: {
      main: '#C4CDD5',
    },
    error: {
      main: '#FFEA00', // yellow
    },
    success: {
      main: '#0072BD', // blue
    },
  },
  typography: {},
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // color: '#919EAB',
          color: '#C4CDD5',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#C4CDD5',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#48473d',
        },
      },
    },
  },
});
