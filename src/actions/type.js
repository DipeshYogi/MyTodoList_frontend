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
export const GET_TASKS = 'GET_TASKS'

// empty initial data
export const initialEmptyResult = {
  data: [],
  error: '',
  isLoading: false,
  status: INITIAL
};