import {GET_TASKS} from './type';
import {doAuthGetRequest} from '../services/AuthenticatedServices';


export const getTasks = () => dispatch=>{
    let url = 'app/tasks/'
    dispatch(doAuthGetRequest(url, GET_TASKS))
}