'use client';

import React from 'react';
import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

const LoginDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const closeDialog = () => setIsOpen(false);

  return (
    <Box>
      <Dialog open={isOpen} onClose={closeDialog} fullWidth>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}
        >
          <Image
            src="https://bazaar.ui-lib.com/_next/static/media/bazaar-black-sm.c758d695.svg"
            alt="bazar"
            width={60}
            height={50}
          />
        </Box>
        <DialogTitle variant="h5" component="h3" align="center">
          Welcome to Gaga Store
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              margin="normal"
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: '1rem', mb: '1rem' }}
            >
              Login
            </Button>
          </Box>
          <Divider>OR</Divider>
          <Typography align="center" sx={{ mt: '0.5rem' }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have account?
            <Link
              color="#3e77aa"
              underline="hover"
              variant="body1"
              sx={{ ml: '0.3rem', ':hover': { color: '#FF7E7E' } }}
            >
              <NextLink href="/auth/sign-up">Create account</NextLink>
            </Link>
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default LoginDialog;
