import {
  LIST_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
} from './actionTypes';

export const listTodos = (todos) => ({
  type: LIST_TODOS,
  todos,
});

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  todo,
});

export const updateTodo = (id, updates) => ({
  type: UPDATE_TODO,
  id,
  updates,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
