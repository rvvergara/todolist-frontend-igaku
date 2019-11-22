import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Header from './Header';

const Dashboard = ({ currentUser }) => (
  <div>
    <Header />
    <div className="container">
      <div className="widget">
        <div className="widget-header">
          <h2 className="widget-header__title">
            Hello
            {' '}
            {currentUser.data.username}
            ! Here are your todos
          </h2>
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </div>
  );

Dashboard.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, null)(Dashboard);
