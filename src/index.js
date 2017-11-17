import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';

import './css/stylesheets/styles.css';

//COMPONENTS
import Home from './components/home';
import Resume from './components/resume';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
    </div>
  </BrowserRouter>, document.querySelector('#root'));