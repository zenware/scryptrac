import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Header from '../Header';
import Main from '../Main';

import './style.css';

const App = (className, props) => (
  <div className={classnames('App', className)} {...props}>
    <Header />
    <Main />
  </div>
)

export default App;
