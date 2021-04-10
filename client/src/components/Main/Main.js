import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title/Title';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    return (
    <div className={classes.background}>
        <NavBar />
        <Title />  
    </div>
    );
}

export default Main;