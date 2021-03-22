import {doPostRequest} from '../services/AuthActionServices';
import {REGISTER, LOGIN, LOGOUT} from './type';


export const registerUser = (name, email, password) => dispatch =>{
  let url = 'accounts/register/';
  let formdata = new FormData()
  formdata.append('username', name)
  formdata.append('email', email)
  formdata.append('password', password)

  dispatch(doPostRequest(url, REGISTER, formdata))
}


export const loginUser = (uname, password) => dispatch =>{
  let url = 'accounts/login/';
  let formdata = new FormData()
  formdata.append('username', uname)
  formdata.append('password', password)

  dispatch(doPostRequest(url, LOGIN, formdata))
}


export const logoutUser = ()=> dispatch => {
  dispatch({
    type: LOGOUT
  })
}

