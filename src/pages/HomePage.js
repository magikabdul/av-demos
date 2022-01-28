import React from 'react';
import { Container, Grid } from '@mui/material';
import MainNavbar from 'components/molecules/MainNavbar/MainNavbar';
import FeatureCard from 'components/molecules/FeatureCard/FeatureCard';
import imgVideoWall from 'assets/card-videowall.jpg';
import Footer from 'components/molecules/Footer/Footer';

const cards = [
  {
    title: 'Video Wall',
    description:
      'A video wall is a special multi-monitor setup that consists of multiple monitors sets tiled together contiguously or overlapped in order to form one large screen.',
    link: '/video-wall',
  },
];

const HomePage = () => (
  <>
    <MainNavbar />
    <Container maxWidth='lg' sx={{ mt: 10 }}>
      <Grid container justifyContent='center' spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            img={imgVideoWall}
            link={card.link}
          />
        ))}
      </Grid>
    </Container>
    <Footer />
  </>
);

export default HomePage;
