import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, img, link }) => (
  <Grid item>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image={img} alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={link} style={{ textDecoration: 'none' }}>
          <Button size='small'>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  </Grid>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FeatureCard;
