import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
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
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(TodoList);
