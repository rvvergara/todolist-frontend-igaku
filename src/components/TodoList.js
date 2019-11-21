import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => todos.map((todo) => (
  <Todo todo={todo} key={todo._id} />
  ));

TodoList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(TodoList);
