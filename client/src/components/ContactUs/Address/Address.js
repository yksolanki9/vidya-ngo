import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';

const Address = () => {
    const classes = useStyles();
    return (
        <div className={classes.contactUs}>
        <Grid container align="center">
          <Grid item lg={4}>
          <FontAwesomeIcon icon="map-marker-alt"  size="2x" />
            <Typography variant="h6" className={classes.title}>
              FIND US
            </Typography>
            <Typography variant="subtitle1">
            Head Office Block-S, Plot no. 3126, DLF Phase III, Gurgaon, India
            </Typography>
          </Grid>

          <Grid item lg={4}>
          <FontAwesomeIcon icon="mobile-alt"  size="2x"/>
            <Typography variant="h6" className={classes.title}>
            REACH US
            </Typography>
            <Typography variant="subtitle1">
            Head Office (Delhi NCR): 8130474724
            </Typography>
            <Typography variant="subtitle1">
            Mumbai: 022-25787317
            </Typography>
            <Typography variant="subtitle1">
            Bangalore: 09986422009
            </Typography>
            
          
            
          </Grid>

          <Grid item lg={4}>
          <FontAwesomeIcon icon="envelope" size="2x" />
            <Typography variant="h6" className={classes.title}>
            GET IN TOUCH
            </Typography>
            <Typography variant="subtitle1">
            Delhi: office@vidya-india.org
            </Typography>
            <Typography variant="subtitle1">
            Mumbai: mumbai@vidya-india.org
            </Typography>
            <Typography variant="subtitle1">
            Bangalore: bangalore@vidya-india.org
            </Typography>


           
          </Grid>
        </Grid>
      </div>
    );
}

export default Address;