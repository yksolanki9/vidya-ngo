import React from 'react';
import Main from './Main/Main';
import AboutUs from './AboutUs/AboutUs';
import Reach from './Reach/Reach';

import {Grid, CssBaseline, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from '../styles';



const App = () => {
    const classes = useStyles();
    return (
        
        <>
          <CssBaseline>
              <Main />
              <AboutUs />
              <Reach />

  <div className={classes.socialMedia} align="center">
  <Typography variant='h5'>
    We're on social media:
  <div className={classes.socialMediaIconsDiv}>
  <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" className={classes.socialMediaIcon}/>
  <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className={classes.socialMediaIcon}/>
  <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" className={classes.socialMediaIcon}/>
  <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className={classes.socialMediaIcon}/>
  <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" className={classes.socialMediaIcon}/>
  </div>
  </Typography>
  </div>
      <hr></hr>
      <div className={classes.aboutUs}>
        <Grid container spacing={10} align="center">
          <Grid item lg={4}>
            <Typography variant="h6">
              FIND US
            </Typography>
            <Typography variant="subtitle1">
            Head Office Block-S, Plot no. 3126, DLF Phase III, Gurgaon, India
            </Typography>
          </Grid>

          <Grid item lg={4}>
            <Typography variant="h6">
            REACH US
            </Typography>
            <Typography variant="subtitle1">
            Head Office (Delhi NCR): 8130474724{"\n"}
            Mumbai: 022-25787317{"\n"}
          Bangalore: 09986422009
            </Typography>
          </Grid>

          <Grid item lg={4}>
            <Typography variant="h6">
            GET IN TOUCH
            </Typography>
            <Typography variant="subtitle1">
            Delhi: office@vidya-india.org{"\n"}
Mumbai: mumbai@vidya-india.org{"\n"}
Bangalore: bangalore@vidya-india.org
            </Typography>
          </Grid>
        </Grid>
      </div>
            
            </CssBaseline>
        </>
           
    )
}

export default App;