'use client';

import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import CustomSearch from '@/components/Search';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { ShoppingBasket } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

const CustomToolbar = ({ basketOpenCloseHandler }: any) => {
  return (
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Gaga Store
      </Typography>
      <CustomSearch />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" aria-label="show 4 new mails" color="error">
          <Badge badgeContent={4} color="success">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="error"
          onClick={basketOpenCloseHandler}
        >
          <Badge badgeContent={17} color="success">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="error"
        >
          <AccountCircle />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default CustomToolbar;
