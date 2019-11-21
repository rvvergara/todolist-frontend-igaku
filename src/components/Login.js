import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from '../store/actions/currentUser';
import users from '../dummy-data/users';

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentUser({
      isAuthenticated: true,
      data: users[0],
    });
    setEmail('');
    setPassword('');
  };

  const changeEmail = e => setEmail(e.target.value);

  const changePassword = e => setPassword(e.target.value);

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={changeEmail}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={changePassword}
      />
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
);
};

Login.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { setCurrentUser })(Login);