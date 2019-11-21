import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import { fetchTodos } from '../store/thunks/todos';

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  const todoList = todos.map((todo) => (
    <Todo todo={todo} key={todo._id} />
  ));

  return (
    <ul>
      { todoList }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Object).isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);
