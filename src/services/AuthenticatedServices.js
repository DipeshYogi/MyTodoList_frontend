import requestInstance from './RequestInstance';
import {SUCCESS, STARTING, FAILURE} from '../actions/type';


export const doAuthGetRequest = (url, actionType) => dispatch =>{
  let token = localStorage.getItem('token')
  if(token){
    requestInstance.defaults.headers.common['Authorization'] = 'Token ' + token;
  }
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.get(url)
      .then(res=> dispatch({type:actionType, status:SUCCESS, response:res.data}))                  
      .catch(err => dispatch({type:actionType, status:FAILURE, response:err}))
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}

export const doAuthPostRequest = (url, actionType, formdata, file_req) => dispatch =>{
  let token = localStorage.getItem('token')
  if(token){
    requestInstance.defaults.headers.common['Authorization'] = 'Token ' + token;
  }

  if(file_req){
    requestInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
  }

  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.post(url, formdata)
      .then(res=> dispatch({type:actionType, status:SUCCESS, response:res.data, formdata: formdata}))                   
      .catch(err => console.log(err))
  )   
}

export const doAuthPutRequest = (url, actionType, formdata) => dispatch =>{
  let token = localStorage.getItem('token')
  if(token){
    requestInstance.defaults.headers['Authorization'] = 'Token ' + token;
  }
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.put(url, formdata)
      .then(res=> dispatch({type:actionType, status:SUCCESS, response:res.data}))                   
      .catch(err => console.log(err))
  )   
}

export const doAuthDeleteRequest = (url, actionType) => dispatch=>{
  let token = localStorage.getItem('token')
  if(token){
    requestInstance.defaults.headers['Authorization'] = 'Token ' + token;
  }
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.delete(url)
      .then(res => dispatch({type:actionType, status:SUCCESS, response: res.data}))
      .catch(err => dispatch({type:actionType, status: FAILURE, response: err}))
  )
}
