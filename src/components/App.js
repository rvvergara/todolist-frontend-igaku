import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import Dashboard from './Dashboard';
import configureStore from '../store/configureStore';
import { setAuthorizationToken } from '../helpers/api';
import { setCurrentUser } from '../store/actions/currentUser';
import withAuth from './hocs/withAuth';

const store = configureStore();

if (localStorage.token) {
  const user = decode(localStorage.token);
  setAuthorizationToken(localStorage.token);

  try {
    store.dispatch(setCurrentUser({
      authenticated: true,
      data: user,
    }));
  } catch (e) {
    store.dispatch(setCurrentUser({
      authenticated: false,
      data: null,
    }));
    localStorage.clear();
  }
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={withAuth(Dashboard, false)} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
