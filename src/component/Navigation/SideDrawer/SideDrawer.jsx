import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import classes from './SideDrawer.css';

import Logo from '../../UI/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationList from '../NavigationList/NavigationList';

import Footer from '../../UI/Footer/Footer';

const SideDrawer = props => {
    let attachedClasses = [classes.root, classes.Close];
    if(props.open) {
        attachedClasses = [classes.root, classes.Open];
    }
    return (
        <div className={classes.SideDrawer}>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}> 
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    >
                    <div className={classes.Logo}>
                        <Logo></Logo>
                    </div>
                    <div style={{paddingTop:'210px'}}>
                        <NavigationList></NavigationList>
                    </div>
                    <div className={classes.Footer}>
                        <Footer/>
                    </div>
                </Drawer>
            </div>
        </div>
        
    );
}

export default SideDrawer;