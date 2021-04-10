import React from 'react';
import useStyles from './styles';
import MediaIcons from './MediaIcons/MediaIcons';
import Address from './Address/Address';

const ContactUs = () => {
    const classes = useStyles();
    return (
        <>
            <MediaIcons />
            <Address />
        </>
    );
}

export default ContactUs;