import React from 'react';
import TodoList from './TodoList';
import users from '../dummy-data/users';

const App = () => (
  <div>
    <h1>
TodoList of
      {' '}
      {users[0].username}
    </h1>
    <TodoList user={users[0]} />
  </div>
);

export default App;
