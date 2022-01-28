import React from 'react';
import { AppBar, Avatar, Box, Button, Container, Toolbar } from '@mui/material';
import styled from 'styled-components';
import logo from 'assets/logo.jpg';
import author from 'assets/author.JPEG';
import { Link } from 'react-router-dom';

const pages = [{ name: 'video wall', link: 'video-wall' }];

const LogoBox = styled.div`
  background: url(${logo}) center/cover no-repeat;
  width: 40px;
  height: 40px;
`;

const MainNavbar = () => (
  <AppBar position='sticky'>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <Box sx={{ mr: 20 }}>
          <LogoBox />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} style={{ textDecoration: 'none' }}>
              <Button>{page.name}</Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Avatar alt='Krzysztof Cholewa' src={author} />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default MainNavbar;
