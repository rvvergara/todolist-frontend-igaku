import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Dashboard = ({ currentUser }) => (
  <div>
    <h1>
    TodoList of
      {' '}
      { currentUser.data.username }
    </h1>
    <TodoForm />
    <TodoList />
  </div>
  );

Dashboard.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, null)(Dashboard);
