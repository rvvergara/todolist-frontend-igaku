import { SET_ERROR } from '../actions/actionTypes';

export default (state = '', action) => {
  if (action.type === SET_ERROR) {
    return action.error;
  }
  return state;
};
