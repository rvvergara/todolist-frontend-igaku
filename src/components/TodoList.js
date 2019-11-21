import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import todos from '../dummy-data/todos';

const TodoList = ({ user }) => {
  const filteredTodos = todos.filter((todo) => todo.owner === user._id);
  return filteredTodos.map((todo) => (
    <Todo todo={todo} key={todo._id} />
  ));
};

TodoList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default TodoList;
