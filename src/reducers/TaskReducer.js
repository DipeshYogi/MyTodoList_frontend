import ReducerHelper from './ReducerHelper';
import {initialEmptyResult, GET_TASKS} from '../actions/type';


const initialState = {
    tasks: initialEmptyResult
}

const TaskReducer = (state=initialState, action) =>{
  switch(action.type){
    case GET_TASKS:
      return{
          ...state,
          tasks: ReducerHelper.handleRequestData(action)
      }
    default:    
      return state
  }
}

export default TaskReducer;