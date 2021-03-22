//Auth
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

//Status
export const SUCCESS = "SUCCESS";
export const INITIAL = "INITIAL";
export const FAILURE = "FAILURE";
export const STARTING = "STARTING";

// Tasks
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Reddit
export const GET_POSTS = 'GET_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const GET_LIKE = 'GET_LIKE';
export const LIKE_ACTION = 'LIKE_ACTION';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const POST_COMMENT = 'POST_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_LIKES = 'GET_COMMENT_LIKES';
export const POST_COMMENT_LIKES = 'POST_COMMENT_LIKES';

// empty initial data
export const initialEmptyResult = {
  data: [],
  error: '',
  isLoading: false,
  status: INITIAL
};