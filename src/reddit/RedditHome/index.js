import React from 'react';
import {connect} from 'react-redux';
import {getPosts, getLikes} from '../../actions/RedditActions';
import './RedditHome.css';
import FilterPost from '../../components/FilterPost';
import ListPost from '../../components/ListPost';
import MyRedditInfo from '../../components/MyRedditInfo';


class RedditHome extends React.Component {
  componentDidMount(){
    this.props.getPosts()
    this.props.getLikes()

  }

  render(){
    return(
      <div className='reddit'>
        <div className='reddit__main'>
          <div className='reddit__component'>
            <FilterPost />
          </div>
          <div className='reddit__component'>
            <ListPost/>
          </div>
        </div>
        <div className='reddit__side'>
          <MyRedditInfo />
        </div>
      </div>
    )
  }
}

export default connect(null, {getPosts, getLikes})(RedditHome);