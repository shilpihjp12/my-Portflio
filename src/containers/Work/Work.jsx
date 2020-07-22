import React, { Component } from 'react';

import classes from './Work.css';
import WorkDetails from '../../component/WorkDetails/WorkDetails'

class Work extends Component {

    state={
        work : [{
            projectId: 1,
            heading: 'MediaItem Angular',
            Description: 'A Media Item App is created to add Media details with their Media Type to learn Angular',
            gitUrl: 'https://github.com/shilpihjp12/Media_Angular',
            appUrl: null,
            imgUrl: ''
        },
        {
            projectId: 2,
            heading: 'MediaItem Springboot',
            Description: 'A Media Item App is created to add Media details with their Media Type to learn Springboot',
            gitUrl: 'https://github.com/shilpihjp12/Media_Springboot',
            appUrl: null,
            imgUrl: ''
        },
        {
            projectId: 3,
            heading: 'My PortFolio',
            Description: 'This App has created for My portfolio. Developed in React with Redux using firbase DB to get data',
            gitUrl: 'https://github.com/shilpihjp12/my-Portflio',
            appUrl: 'https://my-portfolio-72551.firebaseapp.com',
            imgUrl: ''
        }]
    };
    
    render() {
        const h1 = '<h2>';
        const h1close = '</h2>';
        return(
            <div>
                <p className={classes.Decor}>{h1}</p>
                <div className={classes.BodyDecor}>
                    Projects
                </div>
                <p className={classes.Decor}>{h1close}</p>
                <WorkDetails details={this.state.work}></WorkDetails>
                <p className={classes.Decor}>{h1}</p>
                <div className={classes.BodyDecor}>
                    Activities
                </div>
                <p className={classes.Decor}>{h1close}</p>
                coming soon...
            </div>
        )
    }
}

export default Work;