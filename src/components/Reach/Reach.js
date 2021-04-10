import React from 'react';
import {Typography} from '@material-ui/core';
import Stats from './Stats/Stats';
import useStyles from './styles';

const Reach = () => {
    const classes = useStyles();
    return (
        <div className={classes.stats} id="section2">
        <div className={classes.statGrid} >
            
        
            <Typography variant="h6" align="center" className={classes.statsTitle}>
                OUR REACH
            </Typography>
            <Stats />
            </div>
        </div>
    );
}

export default Reach;