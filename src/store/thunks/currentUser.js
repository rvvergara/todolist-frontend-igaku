import { setCurrentUser } from '../actions/currentUser';
import { sendRequest, setAuthorizationToken } from '../../helpers/api';
import { setError } from '../actions/errors';

const setUserInStore = (user, token, dispatch) => {
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
  dispatch(
    setCurrentUser({
      authenticated: true,
      data: user,
    }),
  );
  dispatch(setError(''));
};

export const login = credentials => async dispatch => {
  const path = '/v1/sessions';
  try {
    const res = await sendRequest('post', path, credentials);
    const { user, token } = await res.data;
    setUserInStore(user, token, dispatch);
    return user;
  } catch (e) {
    dispatch(setError('Invalid credentials'));
  }
};

export const logout = () => async dispatch => {
  const path = '/v1/sessions';
  try {
    await sendRequest('delete', path);
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(
      setCurrentUser({
        authenticated: false,
        data: null,
      }),
    );
  } catch (e) {
    dispatch(
      setError('Something went wrong. You may have already been logged out'),
    );
  }
};

export const signUp = signupData => async dispatch => {
  const path = '/v1/users';
  try {
    const res = await sendRequest('post', path, signupData);
    const { user, token } = res.data;
    setUserInStore(user, token, dispatch);
    return user;
  } catch (e) {
    return null;
  }
};

export const validateToken = () => async dispatch => {
  const path = '/v1/users/me';
  if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    try {
      const res = await sendRequest('get', path);
      const { data } = res;
      if (data._id) {
        return dispatch(
          setCurrentUser({
            authenticated: true,
            data,
          }),
        );
      }
      localStorage.clear();
      return dispatch(
        setCurrentUser({
          authenticated: false,
          data: null,
        }),
      );
    } catch (e) {
      localStorage.clear();
      return dispatch(setError('Please log in'));
    }
  }
};
