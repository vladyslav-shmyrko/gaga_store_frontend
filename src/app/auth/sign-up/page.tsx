import React from 'react';
import {
  Paper,
  Box,
  TextField,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';

const Page = () => {
  return (
    <Container maxWidth="md">
      <Paper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '2rem',
            mb: '1rem',
          }}
        >
          <Image
            src="https://bazaar.ui-lib.com/_next/static/media/bazaar-black-sm.c758d695.svg"
            alt="bazar"
            width={60}
            height={50}
          />
        </Box>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          sx={{ fontWeight: '700', mb: '1.5rem' }}
        >
          Welcome to Gaga Store
        </Typography>
        <Box component="form">
          <TextField fullWidth sx={{ mb: '1rem' }} />
          <Button variant="contained" fullWidth sx={{ height: '50px' }}>
            Create Account
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Page;
