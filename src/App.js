import React, { Component } from 'react';
import { Provider} from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/login/Login';
import Dashboard from './views/dashboard/Dashboard';
import User from './views/user/User';

import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={'/users'} component={User} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/'} component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
