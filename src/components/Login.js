import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../store/thunks/currentUser';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
    setEmail('');
    setPassword('');
  };

  const changeEmail = e => setEmail(e.target.value);

  const changePassword = e => setPassword(e.target.value);

  return (
    <form className="login-form">
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeEmail}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={changePassword}
        />
      </div>
      <button
        className="button login-button"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </button>
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
