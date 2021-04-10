import React from 'react';
import {Toolbar, Typography} from '@material-ui/core';
import { Link } from "react-scroll";
import useStyles from './styles'

import tsfLogo from '../../../images/tsf_logo_small.png';

const Heading = () => {
    const classes = useStyles();
    return (
        <>
        <Toolbar className={classes.toolbar} id="section0" >
        <Link to="section0" spy={true} smooth={true} offset={-140} duration={500} >
            <img src={tsfLogo} alt="Logo" className={classes.toolbarLogo} />
          </Link>
          <nav className={classes.navbar}>
          <Link to="section1" spy={true} smooth={true} offset={-140} duration={500}  activeClass={classes.active}>
              <Typography variant="h6" className={classes.link}>
                  About Us
              </Typography>
          </Link>
          <Link to="section2" spy={true} smooth={true} offset={0} duration={500} activeClass={classes.active}>
            <Typography variant="h6" className={classes.link}>
                  Our Reach
              </Typography>
          </Link>
          <Link to="section3" spy={true} smooth={true} offset={0} duration={500} activeClass={classes.active}> 
          <Typography variant="h6" className={classes.link}>
                  Contact Us
              </Typography>
          </Link>
          </nav>
        </Toolbar>
      </>
    );
}

export default Heading;