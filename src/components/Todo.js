import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadTodoUpdate, deleteTodoFromDb } from '../store/thunks/todos';

const Todo = ({ todo, deleteTodoFromDb, uploadTodoUpdate }) => {
  const handleRemove = () => {
    deleteTodoFromDb(todo._id);
  };

  const toggleTodo = () => {
    const { completed } = todo;
    uploadTodoUpdate(todo._id, { completed: !completed });
  };

  const completedClass = todo.completed ? 'completed' : '';
  return (
    <li className="todo-item">
      <span className={`${completedClass} todo-item__text`} onClick={toggleTodo}>
        { todo.description }
      </span>
      <button
        type="button"
        className="button button--link button--delete"
        onClick={handleRemove}
      >
        Remove
      </button>
    </li>
);
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  deleteTodoFromDb: PropTypes.func.isRequired,
  uploadTodoUpdate: PropTypes.func.isRequired,
};

export default connect(null, { deleteTodoFromDb, uploadTodoUpdate })(Todo);
