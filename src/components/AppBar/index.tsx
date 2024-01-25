'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import CustomToolbar from '@/components/CustomToolbar';
import { Box } from '@mui/material';

const CustomAppBar = ({ basketOpenCloseHandler }: any) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CustomToolbar basketOpenCloseHandler={basketOpenCloseHandler} />
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
