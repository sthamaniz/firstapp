import React, { Component } from 'react';
import { Provider} from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import User from './components/user/User';

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
