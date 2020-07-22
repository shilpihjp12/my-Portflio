import React from 'react';

import classes from './Skillset.css'

const Skillset = () => {
    return(
        <div className={classes.myCanvasContainer}>
        <canvas width="500" height="500" className={classes.myCanvas}>
        <ul>
            <li> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">TypeScript</a></li>
            <li><a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a></li>
            <li><a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a></li>
            <li><a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">XML</a></li>
            <li><a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS" target="_blank">Angular 2+</a></li>
            <li><a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress" target="_blank">Wordpress</a></li>
            <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node JS</a></li>
            <li><a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li>
            <li><a data-weight="17" href="" target="_blank">_lodash</a></li>
            <li><a data-weight="23" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank">Bootstrap</a></li>
            <li><a data-weight="15" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a></li>
            <li><a data-weight="20" href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">RxJs</a></li>
            <li><a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a></li>
            <li><a data-weight="19" href="http://mongoosejs.com/" target="_blank">NoSQl</a></li>
            <li><a data-weight="19" href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a></li>
            <li><a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a></li>
            <li><a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a></li>
            <li><a data-weight="19" href="https://bower.io/" target="_blank">Bower</a></li>
            <li><a data-weight="19" href="https://en.wikipedia.org/wiki/BEM" target="_blank">BEM</a></li>
        </ul>
        </canvas>
    </div>);
}

export default Skillset;

