import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'validator';
import { setError } from '../store/actions/errors';
import { signUp } from '../store/thunks/currentUser';

const SignUp = ({
  error,
  setError,
  signUp,
  history,
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

  const handleSignup = async (e) => {
    e.preventDefault();
    validateInputs({ email, password, username });
    const user = await signUp({ email, password, username });
    if (user) history.push('/');
  };

  return (
    <form>
      {
        error && <div>{error}</div>
      }
      <div>
        <input
          type="email"
          placeholder="Set email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Set password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Set username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={handleSignup}
      >
        Sign up
      </button>
    </form>
  );
};

SignUp.propTypes = {
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, { setError, signUp })(SignUp);
