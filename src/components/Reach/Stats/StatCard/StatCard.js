import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './styles';

const StatCard = (props) => {
    console.log("Hello World");
    const classes = useStyles();
    const [isActive, setIsActive] = useState(true); 
    return (
        <Grid item md={3}>
          <FontAwesomeIcon icon={props.StatIcon} size="2x"/>
         
        <CountUp start={isActive ? 0 : props.StatValue} end={props.StatValue} duration={5} onEnd= {()=> setIsActive(false)} >
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
         </CountUp>
   
        <Typography variant="h6"  className={classes.statsGridItem}>
            {props.StatTitle}
        </Typography>
        </Grid>
    );
}

export default StatCard;