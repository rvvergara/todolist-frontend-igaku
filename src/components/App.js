import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import configureStore from '../store/configureStore';
import users from '../dummy-data/users';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <h1>
      TodoList of
      {' '}
      {users[0].username}
    </h1>
    <TodoList user={users[0]} />
  </Provider>
);

export default App;
