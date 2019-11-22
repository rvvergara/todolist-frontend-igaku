import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/thunks/currentUser';

const UserForm = ({ login }) => {
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
  );
};

UserForm.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(UserForm);
