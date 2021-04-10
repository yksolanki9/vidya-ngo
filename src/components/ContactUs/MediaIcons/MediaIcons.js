import React from 'react';
import {Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './styles';

const MediaIcons = () => {
    const classes = useStyles();
    return (
        <div className={classes.socialMedia} align="center" id="section3">
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
    );
}

export default MediaIcons;