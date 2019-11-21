import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../store/thunks/currentUser';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ email, password });
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
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
