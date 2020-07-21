import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Skills.css';

import Contact from '../Contact/Contact'

class Skills extends Component {
    
    render() {
        const h1 = '<h2>';
        const h1close = '</h2>';
        return(
            <div className={classes.Skills}>
                <p className={classes.Decor}>{h1}</p>
                <div className={classes.BodyDecor}>
                    Skills & Experience
                </div>
                <p className={classes.Decor}>{h1close}</p>
                
                <p className={classes.FooterDecor}>The main area of my expertise is front end development 
                (client side of the web).</p>

                <p className={classes.FooterDecor}>HTML, CSS, JS (TypeScript), building
                web and hybrid apps with Angular 2+, ionic and React.</p>

                <p className={classes.FooterDecor}>I have full-stack developer experience with 
                Springboot, JPA, Rest Services and ELK visualization. </p>

                <p className={classes.FooterDecor}>Visit my <a href='https://www.linkedin.com/in/shilpi-priya-7877598b/'>
                    LinkedIn</a> profile for details or  <a href='/contact'>Contact</a> me.</p>
                <Route path={this.props.match.path + '/contact'} component={Contact}></Route>
            </div>
        )
    }
}

export default Skills;