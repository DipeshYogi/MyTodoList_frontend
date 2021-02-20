import React from 'react';
import './header.css';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logoutUser} from '../../actions/AuthActions';


class HeaderScreen extends React.Component{

  onLogout = () =>{
    this.props.logoutUser()
  }

  render(){
    const {history, isAuthenticated} = this.props;
    return(
      <div className='header'>
        <div className='header_title'>
          <p>MyToDo App</p>
        </div>
        {isAuthenticated ?
          <div className='header_auth'>
            <Button
              onClick = {()=> this.onLogout()}
            >
              <p className='auth_btn'>Logout</p>
            </Button>
          </div>       
         :
          <div className='header_auth'>
            <Button
              onClick = {()=>history.push('/login')}
            >
              <p className='auth_btn'>Login</p>
            </Button>
            <Button
              onClick = {()=>history.push('/register')}
            >
              <p className='auth_btn'>Register</p>
            </Button>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.AuthReducers.isAuthenticated
})

export default connect(mapStateToProps, {logoutUser})(withRouter(HeaderScreen));