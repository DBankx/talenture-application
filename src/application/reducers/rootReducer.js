import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

// combine all the reducers from the app
const rootReducer = combineReducers({
  jobs: jobReducer
});

export default rootReducer;
