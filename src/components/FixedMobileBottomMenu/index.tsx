'use client';

import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { ShoppingBasket } from '@mui/icons-material';

const FixedMobileBottomMenu = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ pb: 7, display: { xs: 'block', sm: 'block', md: 'none' } }}>
      <CssBaseline />
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          pl: 0,
          pr: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            width: '100%',
            backgroundColor: '#ffffff',
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Катерогії" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Кошик" icon={<ShoppingBasket />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default FixedMobileBottomMenu;
