
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
const rootReducers = combineReducers({
  user:UserReducer,
});

export default rootReducers;
