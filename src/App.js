import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/login/Login';
import Dashboard from './views/dashboard/Dashboard';
import User from './views/user/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/users'} component={User} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/'} component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
