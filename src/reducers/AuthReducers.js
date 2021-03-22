import {REGISTER, LOGIN, LOGOUT, UPDATE_PROFILE, initialEmptyResult} from '../actions/type';
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
      if(action.status == 'SUCCESS'){
        action.response = action.response.user
        console.log(action.response)
      }
      return{
        ...state,
        isAuthenticated: action.status === 'SUCCESS' ? true : false,
        userdata: ReducerHelper.handleRequestData(action)
      }
    case UPDATE_PROFILE:
      return{
        ...state,
        userdata: action.status == 'SUCCESS' ? ReducerHelper.handleRequestData(action) : state.userdata
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default AuthReducers;