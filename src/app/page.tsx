'use client';

import { categories, goods } from '@/data/products';
import Grid from '@mui/material/Unstable_Grid2';
import GoodItem from '@/components/GoodItem';
import Basket from '@/components/Basket/Basket';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <>
      <Box
        component="div"
        sx={{
          height: '650px',
          mt: '1rem',
          mb: '1rem',
        }}
      >
        <Paper
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'left bottom, right bottom',
            backgroundColor: 'rgb(246, 249, 252)',
            backgroundImage:
              'url(https://bazaar.ui-lib.com/assets/images/headers/Header%20BG1.png), url(https://bazaar.ui-lib.com/assets/images/headers/Header%20BG2.png)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
            }}
          >
            New Items
          </Typography>
        </Paper>
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: '1rem', mb: '1rem' }}>
          {goods.map((item) => (
            <GoodItem key={item.id} title={item.title} price={item.price} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
