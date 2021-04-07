import React from 'react';
import {Button, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

const Title = () => {
    const classes = useStyles();
    return (
        <Container align="center">
        <Typography variant="h1" className={classes.heading}>
          Our Students Need Sponsers!
        </Typography>
        <Typography variant="h6" className={classes.paragraph}>
          There are millions of brilliant, hard-working students who need scholarships every year. These driven, empowered individuals seek to use their knowledge and ambitions to create ripples of change in their communities and in India.
        </Typography>
        <Button variant="contained" size="large" color="secondary" className={classes.donateButton}>
          I'd like to help!
          </Button>
      </Container>
    );
}

export default Title;