import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

const ShopHeader = () => {
  return (
    <AppBar sx={{ height: '55px', justifyContent: 'center' }}>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Gaga Store
        </Typography>
        <IconButton sx={{ mr: '1rem' }}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingBasket color="warning" />
          </Badge>
        </IconButton>
        <IconButton>
          <Avatar
            alt="avatar"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ShopHeader;
