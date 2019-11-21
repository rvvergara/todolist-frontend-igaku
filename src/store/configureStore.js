import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const middlewares = process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk, logger))
    : compose(applyMiddleware(thunk));

export default () => {
  const store = createStore(rootReducer, middlewares);
  return store;
};
