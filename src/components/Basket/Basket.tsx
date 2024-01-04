'use client';

import React from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Basket = (props: any) => {
  const { isOpen, closeHandler = Function.prototype } = props;
  return (
    <Drawer anchor="right" open={isOpen} onClose={closeHandler}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
          <IconButton onClick={closeHandler}>
            <CloseOutlinedIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default Basket;
