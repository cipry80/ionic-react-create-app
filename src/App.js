import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
