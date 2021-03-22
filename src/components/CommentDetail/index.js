import React, { Component } from 'react';
import './CommentDetail.css';
import {IconButton, Button} from '@material-ui/core';
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import {getCommentLikes, postCommentLike} from '../../actions/RedditActions';
import {connect} from 'react-redux';


class CommentDetail extends Component {

  componentDidMount(){
    this.props.getCommentLikes(this.props.post_id)
  }

  handleUpVote(com_id, username){
    var like_state = this.props.comment_likes.data.filter(l => l.comment == com_id && l.username == username)[0]
    if(like_state){
      if(like_state['is_liked']=='true'){
        let is_liked = 'none';
        let is_disliked = 'none';
        this.props.postCommentLike(com_id, is_liked, is_disliked, username)
      }else{
        let is_liked = 'true';
        let is_disliked = 'none';
        this.props.postCommentLike(com_id, is_liked, is_disliked, username)
      }
    }else{
      let is_liked = 'true';
      let is_disliked = 'none';
      this.props.postCommentLike(com_id, is_liked, is_disliked, username)
    }
  }

  handleDownVote(com_id, username){
    var like_state = this.props.comment_likes.data.filter(l => l.comment == com_id && l.username == username)[0]
    
    if(like_state){
      if(like_state['is_disliked']=='true'){
        let is_liked = 'none';
        let is_disliked = 'none';
        this.props.postCommentLike(com_id, is_liked, is_disliked, username)
      }else{
        let is_liked = 'none';
        let is_disliked = 'true';
        this.props.postCommentLike(com_id, is_liked, is_disliked, username)
      }
    }else{
      let is_liked = 'none';
      let is_disliked = 'true';
      this.props.postCommentLike(com_id, is_liked, is_disliked, username)
    }
  }

  render() {
    const com = this.props.comment;
    const username = this.props.user;

    return (
      <div className='comment__detail'>
        <div className='comment__by'>
          <p className='comment__by__user'>{com.username}</p>
          <p className='comment__by__date'>{com.created_on}</p>
        </div>
        <div className='comment__content'>
          <p>{com.comm}</p>
        </div>
        <div className='comment__btn'>
          <IconButton
            onClick = {()=> this.handleUpVote(com.id, username)}
          >
            {this.props.comment_likes.data.length> 0 &&
            this.props.comment_likes.data.filter(l => l.is_liked == 'true' && l.username == username && l.comment == com.id).length > 0 ?
            <GoArrowUp style={{fontSize:20, color:'blue'}}/>
            :
            <GoArrowUp style={{fontSize:20}}/>
            }            
          </IconButton>
          <p>{this.props.comment_likes.data.filter(l => l.is_liked == 'true' && l.comment == com.id).length - 
              this.props.comment_likes.data.filter(l => l.is_disliked == 'true' && l.comment == com.id).length}</p>
          <IconButton
            onClick = {()=> this.handleDownVote(com.id, username)}
            >
          {this.props.comment_likes.data.length> 0 &&
            this.props.comment_likes.data.filter(l => l.is_disliked == 'true' && l.username == username && l.comment == com.id).length > 0 ?
            <GoArrowDown style={{fontSize:20, color:'blue'}}/>
            :
            <GoArrowDown style={{fontSize:20}}/>
            }             
          </IconButton>
          <div>
            <Button size='small'>Reply</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.AuthReducers.userdata.data.username,
  comment_likes: state.RedditReducer.comment_likes
})

export default connect(mapStateToProps, {getCommentLikes, postCommentLike})(CommentDetail);
