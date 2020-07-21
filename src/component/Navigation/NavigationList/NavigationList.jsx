import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon  from '@material-ui/icons/Home';
import AccountIcon  from '@material-ui/icons/AccountCircle';
import SettingIcon  from '@material-ui/icons/Settings';
import VisibilityIcon  from '@material-ui/icons/Visibility';
import EmailIcon  from '@material-ui/icons/Email';

import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import classes from './NavigationList.css'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(0deg, #142f40 0%, #121821 100%, #394468 100%)',
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width:  599px)' : {
            flexDirection: 'column',
            height: '0px'
          },
        '& .MuiBottomNavigationAction-root': {
          color: '#ccbebe'
        },
      }
}));
const NavigationList = props => {
    const [value, setValue] = React.useState(props.location.pathname);
    const classesCSS = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <BottomNavigation  value={value}
            onChange={handleChange}
            className={classesCSS.root}>
            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon  />} component={Link} to="/" />
            <BottomNavigationAction label="About" value="/about" icon={<AccountIcon />} component={Link} to="/about" />
            <BottomNavigationAction label="Skills" value="/skills" icon={<SettingIcon />} component={Link} to="/skills" />
            <BottomNavigationAction label="Work" value="/work" icon={<VisibilityIcon />} component={Link} to="/work" />
            <BottomNavigationAction label="Contact" value="/contact"icon={<EmailIcon />} component={Link} to="/contact" />
        </BottomNavigation>
    );
}

export default withRouter(NavigationList);