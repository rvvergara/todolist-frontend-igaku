import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import configureStore from '../store/configureStore';
import withAuth from './hocs/withAuth';
import { validateToken } from '../store/thunks/currentUser';

const store = configureStore();

store.dispatch(validateToken());

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
