import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import SideBar from '@/components/SideBar';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;
const CustomDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <SideBar />
        <Divider />
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
