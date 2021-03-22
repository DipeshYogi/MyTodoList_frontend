import React, { Component } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {IconButton, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {likeAction} from '../../actions/RedditActions';
import {withRouter} from 'react-router-dom';


class Post extends Component {
  state = {
    likes: [],
  }

  componentDidMount(){
    if(this.props.likes.isLoading == false){
      this.setState({likes: this.props.likes.data})    
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.likes.data !== this.props.likes.data){
      this.setState({likes: this.props.likes.data})
    }
  }

  handleUpVote = (postId, userId) => {
    const {user} = this.props;
    let like_state = this.state.likes.filter(l => l.liked_by == user.id && l.post == postId)[0]
    if(like_state){
      if(like_state['is_liked'] == 'true'){
        let is_liked = 'none';
        let is_disliked = 'none';
        this.props.likeAction(postId, userId, is_liked, is_disliked)
      }else{
        let is_liked = 'true';
        let is_disliked = 'none';
        this.props.likeAction(postId, userId, is_liked, is_disliked)
      }
    }else{
      let is_liked = 'true';
      let is_disliked = 'none';
      this.props.likeAction(postId, userId, is_liked, is_disliked)
    }
  }

  handleDownVote = (postId, userId) => {
    const {user} = this.props;
    let like_state = this.state.likes.filter(l => l.liked_by == user.id && l.post == postId)[0]
    if(like_state){
      if(like_state['is_disliked'] == 'true'){
        let is_liked = 'none';
        let is_disliked = 'none';
        this.props.likeAction(postId, userId, is_liked, is_disliked)
      }else{
        let is_liked = 'none';
        let is_disliked = 'true';
        this.props.likeAction(postId, userId, is_liked, is_disliked)
      }
    }else{
      let is_liked = 'none';
      let is_disliked = 'true';
      this.props.likeAction(postId, userId, is_liked, is_disliked)
    }
  }

  render() {
    const {post, user, history} = this.props;

    return (
      <div className={this.props.details ? 'post_det' : 'post'}>
        <div className='post__votes'>
          <IconButton
            onClick = {()=> this.handleUpVote(post.id, user.id)}
          >
          { this.state.likes.filter(l => l.post == post.id && l.is_liked == 'true' && l.liked_by == user.id).length > 0 ?
            <ThumbUpIcon style={{fontSize:15, color:'blue'}}/>
          :
            <ThumbUpIcon style={{fontSize:15}}/>
           }
          </IconButton>
          {this.state.likes?
          <p>
            {this.state.likes.filter(l =>l.post == post.id && l.is_liked == 'true').length - 
            this.state.likes.filter(l =>l.post == post.id && l.is_disliked == 'true').length}
          </p>
          :
          null
          }
          <IconButton
            onClick = {()=> this.handleDownVote(post.id, user.id)}
          >
          { this.state.likes.filter(l => l.post == post.id && l.is_disliked == 'true' && l.liked_by == user.id).length > 0 ?
            <ThumbDownIcon style={{fontSize:15, color:'blue'}}/>
          :
            <ThumbDownIcon style={{fontSize:15}}/>
          }
          </IconButton>
        </div>
        <div 
          className='post__content'
          onClick = {() => history.push({pathname:'/reddit/post/details', state:{post: post}})}>
          <div className='post__content_cnt'>
            <div className='post__content__postedby'>
              <p>Posted by: {post.username}</p>
              <p>Posted on: {post.created_on}</p>
            </div>
            {post.post_tags.length>0 ?
              <div className='post__content__tags'>
                {post.post_tags.map(tag => (
                  <div key={tag.id} className='post__content__tag'>
                    <p>{tag.tag}</p>
                  </div>
                ))}
              </div>
             : 
             null}

            <div className='post__content__title'>
              <p>{post.title}</p>
            </div>

            {post.desc !== "null" ?
            <div className='post__content__desc'>
              <p>{post.desc}</p>      
            </div>
            : null}

            {post.img?
            <div className='post__content__img'>
              <img src={post.img} alt='' /> 
            </div>
            : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.RedditReducer.likes,
  user: state.AuthReducers.userdata.data
})

export default connect(mapStateToProps, {likeAction})(withRouter(Post));