import React from 'react';
import {Grid} from '@material-ui/core';
import StatCard from './StatCard/StatCard';
import StatsData from './StatsData';
import useStyles from './styles';

const Stats = () => {
    const classes = useStyles();
    const StatsList = StatsData.map((stat) =>   
        <StatCard StatIcon={stat.StatIcon} StatValue={stat.StatValue} StatTitle={stat.StatTitle} />
    );
    return (
        <Grid container className={classes.gridContainer} align="center">   
            {StatsList}
        </Grid>
    );
}

export default Stats;