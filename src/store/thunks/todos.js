import { sendRequest } from '../../helpers/api';
import { listTodos } from '../actions/todos';
import { setError } from '../actions/errors';

export const fetchTodos = () => async (dispatch) => {
  const path = '/v1/todos';
  try {
    const res = await sendRequest('get', path);
    dispatch(listTodos(res.data));
  } catch (e) {
    dispatch(setError(e));
  }
};
