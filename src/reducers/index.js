import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  posts,
  auth,
  profile,
});
