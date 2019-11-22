import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">
          Todolist Igaku
        </h1>
        <form className="login-form">
          <div className="form-group">
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={changeEmail}
            />
            <input
              type="password"
              className="login-input"
              placeholder="password"
              value={password}
              onChange={changePassword}
            />
          </div>
          <div className="form-group">
            <button
              className="button login-button"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <Link to="/signup" className="button signup-button">
            Signup
          </Link>
        </form>
      </div>
    </div>
);
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
