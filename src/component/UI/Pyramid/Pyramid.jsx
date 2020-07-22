import React from 'react';

import classes from './Pyramid.css';

import angular from '../../../assets/angular-icon.svg';
import react from '../../../assets/react.svg';
import javaScript from '../../../assets/javascript-1.svg';
import springboot from '../../../assets/spring-boot.svg';
import java from '../../../assets/java.svg';
import nodejs from '../../../assets/nodejs-icon.svg';

const Pyramid = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.cube}>
                <div className={classes.front}>
                    <img style={{height: "100%"}} src={angular}/>
                </div>
                <div className={classes.back}>
                    <img style={{height: "100%"}} src={javaScript}/>
                </div>
                <div className={classes.top}>
                    <img style={{height: "100%", marginLeft:"-9px"}} src={springboot}/>
                </div>
                <div className={classes.bottom}>
                    <img style={{height: "100%"}} src={nodejs}/>
                </div>
                <div className={classes.left}>
                    <img style={{height: "100%", marginLeft:"-9px"}} src={react}/>
                </div>
                <div className={classes.right}>
                    <img style={{height: "100%"}} src={java}/>
                </div>
            </div>
        </div>
    )
  
}

export default Pyramid;