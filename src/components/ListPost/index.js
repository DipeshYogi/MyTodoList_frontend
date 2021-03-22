import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from '../Post';
import './ListPost.css';
import InfiniteScroll from "react-infinite-scroll-component";
import {withRouter} from 'react-router-dom';



class ListPost extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    if(this.props.posts.isLoading == false){
      this.setState({posts: this.props.posts.data})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.posts.data !== this.props.posts.data){
      this.setState({posts: this.props.posts.data.sort((a, b) => b.id - a.id).slice(0, 6)})
    }
  }

  fetchMorePost(state_post){
    var post_length = state_post.length
    setTimeout(() => {
      this.setState({posts: state_post.concat(this.props.posts.data.sort((a,b)=> b.id - a.id).slice(post_length, post_length+6))})
    }, 1000)
  }

  render() {
    const {history} = this.props;

    return (
      <div className='listpost'>
         <InfiniteScroll
            dataLength={this.state.posts.length}
            next={() => this.fetchMorePost(this.state.posts)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}
         >
         {this.state.posts.map(post => (
           <div
             style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}
            //  onClick = {() => history.push({pathname:'/reddit/post/details', state:{post: post}})}
             >
             <Post post={post} />
           </div>
         ))}
         </InfiniteScroll> 
      </div>
    )
  }
}

const mapStateToProps = state =>({
  posts : state.RedditReducer.posts
})

export default connect(mapStateToProps)(withRouter(ListPost));