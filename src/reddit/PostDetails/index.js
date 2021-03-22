import React, { Component } from 'react';
import Post from '../../components/Post';
import './PostDetails.css';
import PostComments from '../../components/PostComments';


class PostDetails extends Component {

  render() {
    return (
      <div className='postdetails'>
        <Post post = {this.props.location['state']['post']} details={true}/>
        <PostComments postid = {this.props.location['state']['post']['id']} />
      </div>
    )
  }
}


export default PostDetails;

