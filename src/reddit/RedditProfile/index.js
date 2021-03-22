import React, { Component } from 'react';
import {connect} from 'react-redux';
import './RedditProfile.css';
import {TextField, Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {updateProfile} from '../../actions/RedditActions';


class RedditProfile extends Component {
  state = {
    isEdit: false,
    username: '',
    email: '',
    noOfPost: 0

  }

  componentDidMount = () =>{
    const {username, email} = this.props.user;
    const post_no = this.props.post.filter(post=> post.username == username).length
    this.setState({username: username, email: email, noOfPost: post_no})
  }

  handleEditClick(){
    if(this.state.isEdit == false){
      this.setState({isEdit: true})
    }else{
      this.props.updateProfile(this.state.username, this.state.email)
      this.setState({isEdit: false})
    }
  }

  render(){
    const {username, email, noOfPost} = this.state;
    const {history} = this.props;

    return (
      <div className='redditprofile'>
        <div className='redditprofile__info'>
          <p>{username}'s profile</p>
          <div className='redditprofile__inp'>
            <div className='redditprofile__inp__ele'>
              <TextField 
                style={{width: '100%'}}
                label='Username'
                disabled = {this.state.isEdit? false : true}
                value = {username}
                onChange = {(e) => this.setState({username: e.target.value})}
                /> 
            </div>
            <div className='redditprofile__inp__ele'>
              <TextField 
                style={{width: '100%', color:'black'}}
                label='Email'
                disabled = {this.state.isEdit? false : true}
                value = {email}
                onChange = {(e) => this.setState({email: e.target.value})}
                />
            </div>
            <div className='redditprofile__inp__ele'>
              <TextField 
                style={{width: '100%', color:'black'}}
                label='Number of posts'
                disabled = {true}
                value = {noOfPost}
                />
            </div>
            <div className='redditprofile__inp__btn'>
              <Button 
                variant= 'contained'
                onClick={()=> this.handleEditClick()}
              >
                {this.state.isEdit? 'Save' : 'Edit'}
              </Button>
              <Button
                variant = 'outlined'
                onClick = {()=> history.push('/reddit/home')}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state =>({
  user: state.AuthReducers.userdata.data,
  post: state.RedditReducer.posts.data
})


export default connect(mapStateToProps, {updateProfile})(withRouter(RedditProfile));
