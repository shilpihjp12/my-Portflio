import React from 'react';

import AppBar  from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import DrawerIcon  from '@material-ui/icons/Dehaze';
import IconButton from "@material-ui/core/IconButton";

import classesCSS from './PortToolBar.css';
import NavigationList from '../NavigationList/NavigationList';
import Logo from '../../UI/Logo/Logo';

const PortToolBar = props => {

    return(
        <AppBar position="fixed" color="inherit"  className={classesCSS.ToolBar}>
            <ToolBar >
                <div className={classesCSS.DrawerToggle}>
                    <IconButton style={{color:'#ccbebe'}} onClick={props.DrawerToggleClick}>
                        <DrawerIcon  />
                    </IconButton>
                </div>
                {!props.sideDrawer ?  <div className={classesCSS.Logo}>
                    <Logo></Logo>
                </div> : null}
                <div className={classesCSS.DesktopOnly}>
                    <NavigationList></NavigationList>
                </div>
            </ToolBar>
        </AppBar>
    );
}

export default PortToolBar;