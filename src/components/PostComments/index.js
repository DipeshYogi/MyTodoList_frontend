import React, { Component } from 'react';
import './PostComments.css';
import {Button} from '@material-ui/core';
import {postComment, getComments} from '../../actions/RedditActions';
import {connect} from 'react-redux';
import CommentDetail from '../CommentDetail';


class PostComments extends Component {
  state = {
    comment : '',
    parent: '',
    comments: []
  }

  componentDidMount(){
    this.props.getComments(this.props.postid)
    this.setState({comments: this.props.comments})
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.comments !== this.props.comments){
      this.setState({comments: this.props.comments})
    }
  }

  render() {
    const post_id = this.props.postid;

    return (
      <div className='comment'>
        <div className='comment__input'>
          <textarea
            value = {this.state.comment}
            onChange = {(e)=> this.setState({comment: e.target.value})}
            placeholder = 'Write a comment....'
          />
        </div>
        <div className='comment__input__btn'>
          <Button
            onClick = {()=> this.setState({comment: ''})}
          >Cancel</Button>

          <Button
            onClick = {()=> this.props.postComment(post_id, this.state.comment, this.state.parent)}
          >Post</Button>
        </div>
        <div className='comment__count'>
          <p>{this.state.comments.length} Comments</p>
        </div>
        {this.state.comments.length > 0 ?
        <div className='comment__list'>
        {this.state.comments.sort((a, b) => b.id - a.id).map(com => (
          <div key={com.id} className='comment__list__element'>
            <CommentDetail comment = {com} post_id = {post_id}/>
          </div>
        ))}
        </div>
        :
        null
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  comments : state.RedditReducer.comments.data
})


export default connect(mapStateToProps, {postComment, getComments})(PostComments);
