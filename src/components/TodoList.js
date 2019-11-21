import React from 'react';
import Todo from './Todo';
import todos from '../dummy-data/todos';

const TodoList = ({ user }) => {
  const filteredTodos = todos.filter((todo) => todo.owner === user._id);
  return filteredTodos.map((todo) => (
    <Todo todo={todo} key={todo._id} />
  ));
};

export default TodoList;
