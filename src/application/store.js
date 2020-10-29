import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];

const initialStore = {};

// create a store and apply the thunk middleware
const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
