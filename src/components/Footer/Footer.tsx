'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({ theme }) => ({
  height: '250px',
  backgroundColor: '#201E2C',
  [theme.breakpoints.down('md')]: {
    height: '100px',
  },
}));

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Typography variant="h6" component="span" color="white">
            Gaga Store
          </Typography>
        </Box>
      </Container>
    </Wrapper>
    // <Box
    //   sx={{
    //     bgcolor: '#222935',
    //     height: '250px',
    //     display: { xs: 'none', sm: 'block' },
    //   }}
    // ></Box>
  );
};

export default Footer;
