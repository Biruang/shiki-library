import { combineReducers } from 'redux';
import { User } from './user';

export const rootReducer = combineReducers({
  user: User,
});
