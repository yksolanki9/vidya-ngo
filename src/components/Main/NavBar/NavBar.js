import React from 'react';
import {AppBar, Toolbar, Link} from '@material-ui/core';
import useStyles from './styles'

import tsfLogo from '../../../images/tsf_logo_small.png';

const Heading = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar} >
          <img src={tsfLogo} alt="Logo" className={classes.toolbarLogo} />
          <nav className={classes.navbar}>
            <Link variant="h6" href="#" className={classes.link}>
              About Us
            </Link>
            <Link variant="h6" href="#" className={classes.link}>
              Our Reach
            </Link>
            <Link variant="h6" href="#" className={classes.link}>
              Contact Us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      </>
    );
}

export default Heading;