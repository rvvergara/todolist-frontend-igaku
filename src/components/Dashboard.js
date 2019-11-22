import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { logout } from '../store/thunks/currentUser';

const Dashboard = ({ currentUser, logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handleLogout}
        >
        Log Out
        </button>
      </div>
      <h1>
        TodoList of
        {' '}
        { currentUser.data.username }
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

Dashboard.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, { logout })(Dashboard);
