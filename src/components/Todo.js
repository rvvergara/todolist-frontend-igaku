import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../store/actions/todos';

const Todo = ({ todo, removeTodo, updateTodo }) => {
  const handleRemove = () => {
    removeTodo(todo._id);
  };

  const toggleTodo = () => {
    const { completed } = todo;
    updateTodo(todo._id, { completed: !completed });
  };

  const completedClass = todo.completed ? 'completed' : '';
  return (
    <li>
      <span className={completedClass} onClick={toggleTodo}>
        { todo.description }
      </span>
      <span
        className="delete-btn"
        onClick={handleRemove}
      >
        X
      </span>
    </li>
);
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default connect(null, { removeTodo, updateTodo })(Todo);
