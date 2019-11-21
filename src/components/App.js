import React from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import configureStore from '../store/configureStore';
import { setAuthorizationToken } from '../helpers/api';
import Login from './Login';
import { setCurrentUser } from '../store/actions/currentUser';

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
    <Login />
    <h1>
      TodoList of
    </h1>
    <TodoForm />
    <TodoList />
  </Provider>
);

export default App;
