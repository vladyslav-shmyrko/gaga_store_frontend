'use client';

import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ListItemButton from '@mui/material/ListItemButton';
import { StarBorder } from '@mui/icons-material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

// const data = [
//   { icon: <HomeRoundedIcon />, label: 'Home' },
//   { icon: <AllInboxIcon />, label: 'Categories' },
// ];

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const [openCategories, setOpenCategories] = React.useState(false);
  const [openTea, setOpenTea] = React.useState(false);

  const handleCategoriesClick = () => {
    setOpenCategories(!openCategories);
  };

  const handleTeaClick = () => {
    setOpenTea(!openTea);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360 }} component="nav">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={handleCategoriesClick}>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItemButton>
          <ListItemButton onClick={handleTeaClick}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Tea" />
            {openTea ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openTea} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Lipton" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
};

export default SideBar;
