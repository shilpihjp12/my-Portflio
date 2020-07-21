import React from 'react';

import logo2 from '../../../assets/logo2.svg';
import classes from "./Logo.css";

const Logo = (prop) => {
    return(
        <div className={classes.Logo}>
            <img src={logo2} alt="MyPortfolio"/>
        </div>
    )
}

export default Logo; 