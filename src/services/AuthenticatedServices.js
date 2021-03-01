import requestInstance from './RequestInstance';
import {SUCCESS, STARTING, FAILURE} from '../actions/type';


export const doAuthGetRequest = (url, actionType) => dispatch =>{
  let token = localStorage.getItem('token')
  if(token){
    requestInstance.defaults.headers['Authorization'] = 'Token ' + token;
  }
  return(
    dispatch({type:actionType, status:STARTING, response:undefined}),
    requestInstance.get(url)
      .then(res=> dispatch({type:actionType, status:SUCCESS, response:res.data}))                   
      .catch(err => dispatch({type:actionType, status:FAILURE, response:err}))
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}
