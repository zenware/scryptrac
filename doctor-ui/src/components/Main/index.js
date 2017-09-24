import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../About';
import Home from '../Home';
import NotFound from '../NotFound';
import Patient from '../Patient';
//    <Route path='/' component={Home}/>

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/patient/:number' component={Patient}/>
    <Route path='/about' component={About}/>
    <Route path='*' component={NotFound}/>
  </Switch>
)
export default Main;
