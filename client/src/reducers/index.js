import { combineReducers } from 'redux';
import user from './user';
import journal from './journal';

const rootReducer = combineReducers({
  user,
  journal,
});

export default rootReducer;
