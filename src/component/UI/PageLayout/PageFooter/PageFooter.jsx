import React from 'react';
import classes from './PageFooter.css'

const PageFooter = props => {
    const closehtml = '</html>';
    const closebody = '</body>';
    return(
        <div>
            <p className={classes.Decor}>&nbsp;&nbsp;&nbsp;&nbsp;{closebody}</p>
            <p className={classes.Decor}>{closehtml}</p>
        </div>
    );
}

export default PageFooter;