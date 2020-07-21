import React from 'react';
import classes from './PageHeader.css'

const PageHeader = props => {
    const html = '<html>';
    const body = '<body>';
    
    return(
        <div>
            <p className={classes.Decor}>{html}</p>
            <p className={classes.Decor}>&nbsp;&nbsp;&nbsp;&nbsp;{body}</p>
        </div>
    );
}

export default PageHeader;