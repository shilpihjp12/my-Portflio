import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import './App.css';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';
import Work from './containers/Work/Work';
import Layout from'./hoc/Layout/Layout';


var sectionStyle = {
  minHeight: '95vh',
  color: "white"
};
function App() {
  return (
    <div style={sectionStyle}>
      <Layout>
        <Container fixed>
          <Switch>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/work' component={Work}></Route>
            <Route path='/skills' component={Skills}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/' exact component={Home}></Route>
          </Switch>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
