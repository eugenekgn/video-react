import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Match } from 'react-router';

ReactDOM.render((
  <BrowserRouter>
    <Router>
      <Match exactly pattern='/' component={Home} />
      <Miss component={NotFound} />
    </Router>
  </BrowserRouter>
), document.getElementById('root'))




