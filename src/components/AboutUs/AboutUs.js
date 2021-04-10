import React from 'react';
import {Typography} from '@material-ui/core';

import useStyles from './styles';

const AboutUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.aboutUs} align="center" id="section1">
          <Typography variant="h6" className={classes.aboutUsTitle} >
            WE'RE VIDYA. HERE'S WHAT WE DO
          </Typography>

          <Typography variant="subtitle1" className={classes.aboutUsContent} >
          An excommunicated widow who is now a successful business owner. A dropout youth who became a high scorer and a proud graduate. A 9-year old girl who persuaded her abusive, alcoholic father to go into rehab. A girl in our eighth grade class who dreams of going back to her home town and changing it from the ground up. A 10th standard girl who scored a perfect 10.0 CGPA.
          </Typography>

          <Typography variant="subtitle1" className={classes.aboutUsContent}>
          VIDYA makes stories like this happen. We're a 34-year old NGO based in India that believes in social change through empowering the most vulnerable members of underprivileged communities: the children, youth and women. We create peerless programs with our approach of holistic, practical education and vocational training. Join us, donate or just spread the word.
          </Typography>

          <Typography variant="h6" className={classes.aboutUsTitle} >
          Educate. Empower. Transform.
          </Typography>
      
  </div>
    );
}

export default AboutUs;