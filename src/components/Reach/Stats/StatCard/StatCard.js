import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './styles';

const StatCard = (props) => {
    const classes = useStyles();
    const [isActive, setIsActive] = useState(true); 
    return (
        <Grid item md={3} className={classes.gridItem} align="center">
          <FontAwesomeIcon icon={props.StatIcon} size="2x" className={classes.statIcon}/>
         
        <CountUp start={isActive ? 0 : props.StatValue}  end={props.StatValue} duration={5} onEnd= {()=> setIsActive(false)} >
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <Typography variant="h5" ref={countUpRef} className={classes.statValue}/>
                </VisibilitySensor>
            )}
         </CountUp>
   
        <Typography variant="h5" className={classes.statTitle}>
            {props.StatTitle}
        </Typography>
        </Grid>
    );
}

export default StatCard;