import React, { Component } from 'react';

import classes from './Home.css'
import { Button } from '@material-ui/core';

class Home extends Component {

    onClickHandle = () => {
        this.props.history.push('/contact')
    }
    
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

                <div>
                    <Button
                    variant="contained"
                    className={classes.Button}
                    onClick={this.onClickHandle}>Contact Me</Button>
                </div>
            </div>
        )
    }
}

export default Home;