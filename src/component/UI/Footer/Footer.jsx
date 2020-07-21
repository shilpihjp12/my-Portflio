import React from 'react';
import classes from './Footer.css';


import LinkedIn  from '@material-ui/icons/LinkedIn';
import GitHub  from '@material-ui/icons/GitHub';
import InsertDriveFile  from '@material-ui/icons/InsertDriveFile';
import IconButton from "@material-ui/core/IconButton";

import resume from '../../../assets/Shilpi_priya_Resume.pdf';

const Footer = props => {
    return ( <div className={classes.Footer}>
        <IconButton style={{color:'#2D5D7C'}} href='https://www.linkedin.com/in/shilpi-priya-7877598b/'>
            <LinkedIn  />
        </IconButton>
        <IconButton style={{color:'#2D5D7C'}} href='https://github.com/shilpihjp12'>
            <GitHub  />
        </IconButton>
        <IconButton style={{color:'#2D5D7C'}} href={resume}>
            <InsertDriveFile  />
        </IconButton>
    </div>
    )
}

export default Footer;