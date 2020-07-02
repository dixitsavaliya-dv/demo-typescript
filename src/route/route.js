import React from 'react';
import { Router, Route } from 'react-router';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Services from '../pages/services/services';
import history from '../history';
import Add from '../pages/add/add';
import List from '../pages/list/list';
import Edit from '../pages/edit/edit';

const createRoutes=(
    <Router history={history}>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/services' component={Services} />
    <Route exact path='/add' component={Add} />
    <Route exact path='/edit/:id' component={Edit} />
    <Route exact path='/list' component={List} />
  </Router>
)

export default createRoutes;