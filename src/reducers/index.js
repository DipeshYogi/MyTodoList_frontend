import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';
import TaskReducer from './TaskReducer';
import RedditReducer from './RedditReducer';

export default combineReducers({AuthReducers, TaskReducer, RedditReducer})