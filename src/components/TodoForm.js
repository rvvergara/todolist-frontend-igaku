import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createTodo } from '../store/actions/todos';
import { setError } from '../store/actions/errors';

const TodoForm = ({ createTodo, setError, error }) => {
  const [description, setDescription] = useState('');

  const handleChange = e => setDescription(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      _id: uuid(),
      description,
    };
    if (!description) {
      setError('Description cannot be blank');
    }
    createTodo(newTodo);
    setDescription('');
  };

  return (
    <form>
      {
        error && <div>{error}</div>
      }
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
  setError: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { createTodo, setError })(TodoForm);
