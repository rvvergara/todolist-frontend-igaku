import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../Login';

const withAuth = (Component, isPublic) => {
  const Authenticated = ({ authenticated, ...props }) => {
    if (isPublic) {
      return !authenticated ? <Component {...props} /> : <Redirect to="/" />;
    }
    return authenticated ? <Component {...props} /> : <Login />;
  };

  Authenticated.propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => ({
    authenticated: state.currentUser.authenticated,
  });

  return connect(mapStateToProps, null)(Authenticated);
};

export default withAuth;
