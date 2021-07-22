import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import PrivateRoute from '../src/components/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';

function App() {

  return (
    <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Registration} />
        </Switch>
    </Router>
  );
}

export default App;
