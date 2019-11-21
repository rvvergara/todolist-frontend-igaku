import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createTodo } from '../store/actions/todos';

const TodoForm = ({ createTodo }) => {
  const [description, setDescription] = useState('');

  const handleChange = e => setDescription(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      _id: uuid(),
      description,
    };
    createTodo(newTodo);
  };

  return (
    <form>
      <input
        type="text"
        value={description}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};


TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default connect(null, { createTodo })(TodoForm);
