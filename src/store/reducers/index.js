import { combineReducers } from 'redux';
import currentUser from './currentUser';
import error from './error';
import todos from './todos';

export default combineReducers({
  currentUser,
  error,
  todos,
});
