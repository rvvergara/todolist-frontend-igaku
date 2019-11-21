import { sendRequest } from '../../helpers/api';
import { listTodos, createTodo, updateTodo } from '../actions/todos';
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

export const uploadTodo = todo => async (dispatch) => {
  const path = '/v1/todos';
  try {
    const res = await sendRequest('post', path, todo);
    dispatch(createTodo(res.data));
  } catch (e) {
    dispatch(setError('Todo cannot be submitted'));
  }
};

export const uploadTodoUpdate = (id, updates) => async (dispatch) => {
  const path = `/v1/todos/${id}`;
  try {
    const res = await sendRequest('put', path, updates);
    dispatch(updateTodo(id, res.data));
  } catch (e) {
    dispatch(setError('Cannot update todo'));
  }
};
