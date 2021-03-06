import { sendRequest, setAuthorizationToken } from '../../helpers/api';
import {
 listTodos, createTodo, updateTodo, removeTodo,
} from '../actions/todos';

import { setError } from '../actions/errors';

const checkToken = () => {
  if (!localStorage.token) {
    setAuthorizationToken(false);
  }
};

export const fetchTodos = () => async (dispatch) => {
  checkToken();
  const path = '/v1/todos';
  try {
    const res = await sendRequest('get', path);
    dispatch(listTodos(res.data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const uploadTodo = todo => async (dispatch) => {
  checkToken();
  const path = '/v1/todos';
  try {
    const res = await sendRequest('post', path, todo);
    dispatch(createTodo(res.data));
  } catch (e) {
    dispatch(setError('Todo cannot be submitted'));
  }
};

export const uploadTodoUpdate = (id, updates) => async (dispatch) => {
  checkToken();
  const path = `/v1/todos/${id}`;
  try {
    const res = await sendRequest('put', path, updates);
    dispatch(updateTodo(id, res.data));
  } catch (e) {
    dispatch(setError('Cannot update todo'));
  }
};

export const deleteTodoFromDb = (id) => async (dispatch) => {
  checkToken();
  const path = `/v1/todos/${id}`;

  try {
    await sendRequest('delete', path);
    dispatch(removeTodo(id));
  } catch (e) {
    dispatch(setError('Cannot delete todo'));
  }
};
