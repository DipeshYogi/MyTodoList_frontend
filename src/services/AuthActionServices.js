import {SUCCESS, STARTING, FAILURE} from '../actions/type';
import requestInstance from './RequestInstance';


export const doPostRequest = (url, actionType, data) => dispatch =>{
  return(
    dispatch({type:actionType, status: STARTING, response: undefined}),
    requestInstance.post(url, data)
      .then(res => {
        if(res.data.token){
          localStorage.setItem('token', res.data.token)
        }
        dispatch({type:actionType, status: SUCCESS, response: res.data})
      })
      .catch(err => dispatch({type:actionType, status: FAILURE, response: err}))
  )
}
