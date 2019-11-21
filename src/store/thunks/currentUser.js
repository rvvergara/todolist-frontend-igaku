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
  dispatch(setError(''));
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

export const validateToken = () => async (dispatch) => {
  const path = '/v1/users/me';
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    try {
      const res = await sendRequest('get', path);
      const { data } = res;
    if (data._id) {
      return dispatch(setCurrentUser({
        authenticated: true,
        data,
      }));
    }
    localStorage.clear();
    return dispatch(setCurrentUser({
      authenticated: false,
      data: null,
    }));
    } catch (e) {
      localStorage.clear();
      return dispatch(setError('Please log in'));
    }
  }
};
