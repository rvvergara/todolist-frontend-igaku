import decode from 'jwt-decode';
import { setCurrentUser } from '../actions/currentUser';
import { sendRequest, setAuthorizationToken } from '../../helpers/api';
import { setError } from '../actions/errors';

const setUserInStore = (user, token, dispatch) => {
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
  dispatch(setCurrentUser({
    authenticated: true,
    data: user,
  }));
  setError('');
};

export const login = credentials => async (dispatch) => {
  const path = '/v1/sessions';
  try {
    const res = await sendRequest('post', path, credentials);
    const { user, token } = await res.data;
    setUserInStore(user, token, dispatch);
  } catch (e) {
    setError('Invalid credentials');
  }
};
