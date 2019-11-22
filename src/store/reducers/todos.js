import {
  LIST_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_TODOS:
      return action.todos;
    case CREATE_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
    {
      const { id, updates } = action;
      const todoIndex = state.findIndex(todo => todo._id === id);
      const newState = [...state];
      newState[todoIndex] = { ...newState[todoIndex], ...updates };
      return newState;
    }
    case REMOVE_TODO:
      return state.filter(todo => todo._id !== action.id);
    default:
      return state;
  }
};
