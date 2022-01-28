import React from 'react';
import styled from 'styled-components';
import background from 'assets/not-found.jpg';
import { Box, Button, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  background: url(${background}) center/cover no-repeat;
`;

const Credits = styled.div`
  display: block;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;

  & a {
    color: darkgray;
  }

  & span {
    font-weight: bold;
  }
`;

const NotFoundPage = () => (
  <Container>
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
      }}
    >
      <Typography sx={{ fontWeight: 'bold' }} variant='h1' align='center'>
        Upsss
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }} variant='h2' align='center' gutterBottom>
        something went wrong
      </Typography>
      <Box sx={{ display: 'inline-flex' }}>
        <RouterLink to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained' color='info' size='large'>
            go HOME
          </Button>
        </RouterLink>
      </Box>
    </Box>
    <Credits>
      <Link href='https://www.pexels.com/@paggiarofrancesco?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>
        Photo by <span>Francesco Paggiaro</span> from <span>Pexels</span>
      </Link>
    </Credits>
  </Container>
);

export default NotFoundPage;
