import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';
import TaskReducer from './TaskReducer';

export default combineReducers({AuthReducers, TaskReducer})