import React, { Component } from 'react';

import classes from './About.css';

import Pyramid from '../../component/UI/Pyramid/Pyramid';

class About extends Component {
    
    render() {
        const h1 = '<h2>';
        const h1close = '</h2>';
        return(
            <div className={classes.Parent}>
                 <div className={classes.About}>
                    <p className={classes.Decor}>{h1}</p>
                    <div className={classes.BodyDecor}>
                    About me
                    </div>
                    <p className={classes.Decor}>{h1close}</p>
                    <p className={classes.FooterDecor}>Professionally connected with development industry 
                        and information technology for 5+ years.</p>
                    <p className={classes.FooterDecor}>Experience in Software development, web and hybrid application development, 
                        Front-end, Back-end and visualization.</p>
                    <p className={classes.FooterDecor}>Exposed to various phases of the SDLC models like Agile (Scrum). Experienced 
                        in system analysis, unit and integration testing, UAT support, project estimations. 
                        Responsible for requirements gathering, analysis and interactions with client.</p>
                    <p className={classes.FooterDecor}>Interested in working on
                        ambitious projects.</p>
                </div>
                <div className={classes.Pyramid}>
                    <Pyramid></Pyramid>
                </div>
            </div>
           
        )
    }
}

export default About;