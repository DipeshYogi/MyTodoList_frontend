import React from 'react';
import './register.css';
import {TextField, Button, withStyles} from '@material-ui/core';
import {registerUser} from '../../../actions/AuthActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class RegisterScreen extends React.Component{
  state = {
    username : '',
    email : '',
    password : '',
    password1 : ''
  }

  onRegister = () => {
    const {username, email, password, password1} = this.state;
    if (password === password1){
      this.props.registerUser(username, email, password)
    }
  }

  render(){
    const {classes, isRegistered} = this.props;

    if (isRegistered){
      return <Redirect to='/login' />
    }else{
      return(
        <div className='register'>
          <p>Register to ToDo App</p>
          <div className='register__inputs'>
            <TextField
              label='Username'
              value = {this.state.username}
              onChange = {(e)=> this.setState({username: e.target.value}) }
            />

            <TextField
              label='Email'
              value = {this.state.email}
              onChange = {(e)=> this.setState({email: e.target.value}) }
            />

            <TextField
              label='Password'
              value = {this.state.password}
              onChange = {(e)=> this.setState({password: e.target.value}) }
            />

            <TextField
              label='Password again'
              value = {this.state.password1}
              onChange = {(e)=> this.setState({password1: e.target.value}) }
            />
            <div className='register_btn'>
              <Button
                variant='contained'
                className={classes.btnStyles}
                onClick = {()=> this.onRegister()}
              >
                Register
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
  isRegistered: state.AuthReducers.isRegistered
})

export default connect(mapStateToProps, {registerUser})(withStyles(styles)(RegisterScreen));