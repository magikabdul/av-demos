import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';

const Footer = () => (
  <Container maxWidth='lg' sx={{ marginTop: 50 }}>
    <Divider sx={{ marginBottom: 5 }} />
    <Box sx={{ margin: '0 24px' }}>
      <Typography color='grey.700' variant='body2' align='center'>
        &copy; Copyright 2020 by magikabdul
      </Typography>
    </Box>
  </Container>
);

export default Footer;
