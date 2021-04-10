import React from 'react';
import {Typography} from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <Typography variant="subtitle1" className={classes.footer}>
            Copyright 2021, Vidya Integrated Development for Children
        </Typography>
    )
}

export default Footer;
