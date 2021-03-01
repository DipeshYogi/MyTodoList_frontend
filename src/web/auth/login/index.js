import React from 'react';
import './login.css';
import {TextField, Button, withStyles} from '@material-ui/core';
import {loginUser} from '../../../actions/AuthActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class LoginScreen extends React.Component{
  state = {
    username : '',
    password : '',
  }

  onLogin = () => {
    const {username, password} = this.state;
    this.props.loginUser(username, password)
  }

  render(){
    const {classes, isAuthenticated} = this.props;
    if(isAuthenticated){
      return <Redirect to='/' />
    }else{
      return(
        <div className='login'>
          <p>Login to ToDo App</p>
          <div className='login__inputs'>
            <TextField
              label='Username'
              value = {this.state.username}
              onChange = {(e)=> this.setState({username: e.target.value}) }
            />
  
            <TextField
              label='Password'
              value = {this.state.password}
              onChange = {(e)=> this.setState({password: e.target.value}) }
            />
  
            <div className='login_btn'>
              <Button
                variant='contained'
                className={classes.btnStyles}
                onClick = {()=> this.onLogin()}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
       )
    }
  }
}

const styles = () => ({
  btnStyles:{
    height: 35,
    fontWeight: 'bold',
    fontSize:12,
    color: '#ffff',
    backgroundColor:'#D2452D',
    "&:hover":{
        backgroundColor:'#D2452D'
    }
  }
})

const mapStateToProps = state => ({
  isAuthenticated: state.AuthReducers.isAuthenticated
})

export default connect(mapStateToProps, {loginUser})(withStyles(styles)(LoginScreen));