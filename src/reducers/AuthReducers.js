import {REGISTER, LOGIN, LOGOUT, initialEmptyResult} from '../actions/type';
import ReducerHelper from './ReducerHelper';

const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  userdata: initialEmptyResult
}

const AuthReducers = (state = initialState, action) => {
  switch(action.type){
    case REGISTER:
      return{
        ...state,
        isRegistered: action.status == 'SUCCESS' ? true : false,
        userdata: ReducerHelper.handleRequestData(action)
      }
    case LOGIN:
      return{
        ...state,
        isAuthenticated: action.status === 'SUCCESS' ? true : false,
        userdata: ReducerHelper.handleRequestData(action)
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default AuthReducers;