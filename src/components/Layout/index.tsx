'use client';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CustomAppBar from '@/components/AppBar';
import CustomDrawer from '@/components/Drawer';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FixedMobileBottomMenu from '@/components/FixedMobileBottomMenu';
import Basket from '@/components/Basket/Basket';
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [basketIsOpen, setBasketIsOpen] = React.useState(false);
  const basketOpenCloseHandler = () => {
    setBasketIsOpen(!basketIsOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar basketOpenCloseHandler={basketOpenCloseHandler} />
      <CustomDrawer />
      <Box flex={1} mt={10}>
        <Typography variant="h2" component="h2" align="center">
          Нові надходження
        </Typography>
        <Box>
          <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ mt: '1rem', mb: '1rem' }}>
              {children}
            </Grid>
          </Container>
        </Box>
      </Box>
      <FixedMobileBottomMenu />
      <Basket
        isOpen={basketIsOpen}
        closeHandler={() => setBasketIsOpen(false)}
      />
    </Box>
  );
};

export default DefaultLayout;
