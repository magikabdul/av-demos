import React from 'react';
import { Container, Grid } from '@mui/material';
import MainNavbar from 'components/molecules/MainNavbar/MainNavbar';
import FeatureCard from 'components/molecules/FeatureCard';
import imgVideoWall from 'assets/card-videowall.jpg';

const cards = [
  {
    title: 'Video Wall',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis aliquam nunc. Donec venenatis risus eget lobortis pulvinar. Etiam pulvinar.',
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
  </>
);

export default HomePage;
