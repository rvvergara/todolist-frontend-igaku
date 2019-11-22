import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { login, signUp } from '../store/thunks/currentUser';
import { setError } from '../store/actions/errors';

const UserForm = ({
 login, signUp, setError, history, location, error,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const validateInputs = ({ email, password, username }) => {
    if (!validator.isEmail(email)) {
      setError('Please input a valid email');
    } else if (password.length < 7) {
      setError('Password must at least be 7 characters long');
    } else if (username.match(/[^a-zA-Z0-9]/g)) {
      setError('Only letters and numbers can be in username');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/') login({ email, password });
    if (location.pathname === '/signup') {
      validateInputs({ email, password, username });
      signUp({ email, password });
      const user = signUp({ email, password, username });
      if (user) history.push('/');
    }
  };

  return (
    <div>
      {
        error && <div>{error}</div>
      }
      <form className="login-form">
        <div className="form-group">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {
            location.pathname === '/signup' && (
            <input
              type="text"
              className="login-input"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            )
          }
        </div>
        {location.pathname === '/' && (
          <div className="form-group">
            <button
              className="button login-button"
              type="submit"
              onClick={handleSubmit}
            >
                  Login
            </button>
            <Link to="/signup" className="button signup-button">
                Signup
            </Link>
          </div>
        )}
        {
          location.pathname === '/signup' && (
            <div className="form-group">
              <button
                className="button login-button"
                type="submit"
                onClick={handleSubmit}
              >
                Create Account
              </button>
              <footer>
                <small>
                  <span>Have an account already?</span>
                  <Link to="/" className="login-link">Log in</Link>
                </small>
              </footer>
            </div>
          )
        }
      </form>
    </div>
  );
};

UserForm.propTypes = {
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { login, signUp, setError })(UserForm);
