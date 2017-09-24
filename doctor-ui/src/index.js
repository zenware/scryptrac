import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//import Routes from './routes';
import App from './components/App';

import './index.css';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//<Routes history={HashRouter} />,

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
//registerServiceWorker();
