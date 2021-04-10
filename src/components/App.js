import React from 'react';
import Main from './Main/Main';
import AboutUs from './AboutUs/AboutUs';
import Reach from './Reach/Reach';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

import {CssBaseline} from '@material-ui/core';
import useStyles from '../styles';



const App = () => {
    const classes = useStyles();
    return (
        
        <>
          <CssBaseline>
              <Main />
              <AboutUs />
              <Reach />
              <ContactUs />
              <Footer />            
            </CssBaseline>
        </>
           
    )
}

export default App;