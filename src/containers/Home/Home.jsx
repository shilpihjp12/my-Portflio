import React, { Component } from 'react';

import classes from './Home.css'

class Home extends Component {
    
    render() {
        const h1 = '<h1>';
        const h1close = '</h1>';
        return(
            <div>
                <p className={classes.Decor}>{h1}</p>
                <div className={classes.BodyDecor}>
                    <div>Hi,</div>
                    <div>I'm <span className={classes.NameTextDecor}>S</span>hilpi,</div>
                    <div> full-stack developer.</div>
                    <div>Welcome to my portfolio!!!</div>
                </div>
                <p className={classes.Decor}>{h1close}</p>
                
                <p className={classes.FooterDecor}>Front End Developer / BackEnd Developer /  Full-stack Developer</p>
            </div>
        )
    }
}

export default Home;