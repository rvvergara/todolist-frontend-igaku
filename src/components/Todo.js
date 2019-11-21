import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <div>
    { todo.description }
  </div>
);

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};

export default Todo;
