import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadTodo } from '../store/thunks/todos';
import { setError } from '../store/actions/errors';

const TodoForm = ({ uploadTodo, setError, error }) => {
  const [description, setDescription] = useState('');

  const handleChange = e => setDescription(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      description,
    };
    if (!description) {
      setError('Description cannot be blank');
    }
    uploadTodo(newTodo);
    setDescription('');
    setError('');
  };

  return (
    <div>
      {
      error && <p className="add-todo-error">{error}</p>
    }
      <form className="add-todo">
        <input
          className="add-todo__input"
          type="text"
          value={description}
          onChange={handleChange}
        />
        <button
          className="button add-todo__button"
          type="submit"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};


TodoForm.propTypes = {
  uploadTodo: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { uploadTodo, setError })(TodoForm);
