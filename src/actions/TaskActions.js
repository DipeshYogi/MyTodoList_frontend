import {GET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK} from './type';
import {doAuthGetRequest, doAuthPostRequest, doAuthPutRequest,
        doAuthDeleteRequest} from '../services/AuthenticatedServices';
import moment from 'moment';


export const getTasks = () => dispatch=>{
    let url = 'app/tasks/'
    dispatch(doAuthGetRequest(url, GET_TASKS))
}

export const addTasks = (data) => dispatch => {
    let url = 'app/tasks/';
    let formdata = new FormData()
    formdata.append('title', data['title'])
    formdata.append('desc', data['desc'])
    formdata.append('priority', data['priority'])
    formdata.append('sch_date_time', moment(data['schDateTime']).format('YYYY-MM-DD HH:mm'))

    dispatch(doAuthPostRequest(url, ADD_TASK, formdata))
}


export const updateTasks = (data, id) => dispatch => {
  let url = 'app/tasks/'+ id + '/';
  let formdata = new FormData()
  formdata.append('title', data['title'])
  formdata.append('desc', data['desc'])
  formdata.append('priority', data['priority'])
  formdata.append('sch_date_time', moment(data['schDateTime']).format('YYYY-MM-DD HH:mm'))

  dispatch(doAuthPutRequest(url, UPDATE_TASK, formdata))
}


export const deleteTasks = (id) => dispatch => {
  let url = 'app/tasks/' + id + '/';
  dispatch(doAuthDeleteRequest(url, DELETE_TASK))
}