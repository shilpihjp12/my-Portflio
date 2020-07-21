import React , {Component} from 'react';

import Container from '@material-ui/core/Container';

import classes from './Layout.css';
import PortToolBar from '../../component/Navigation/PortToolBar/PortToolBar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import PageFooter from '../../component/UI/PageLayout/PageFooter/PageFooter';
import PageHeader from '../../component/UI/PageLayout/PageHeader/PageHeader';
import Footer from '../../component/UI/Footer/Footer';



class Layout extends Component {
    state ={
        showSideDrawer : false
    }

    SideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    DrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }
    render(){
        return(
            <div>
                <PortToolBar DrawerToggleClick={this.DrawerToggleHandler} sideDrawer={this.state.showSideDrawer} ></PortToolBar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler}></SideDrawer>
                <Container fixed className={classes.container}>
                    <div className={classes.header}>
                        <PageHeader></PageHeader>
                    </div>
                    {this.props.children}
                    <div className={classes.Bottom}>
                        <PageFooter></PageFooter>
                    </div>
                </Container>
                <div className={classes.Footer}>
                    <Footer></Footer>
                </div>
            </div>
        )
    };
}

export default Layout;