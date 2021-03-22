import React, { Component } from 'react';
import './MyRedditInfo.css';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';


class MyRedditInfo extends Component {
  render() {
    const {history} = this.props;

    return (
      <div className='reddit_info'>
        <p>My Reddit Info</p>
        <div className='reddit_info__actions'>
          <Button
            onClick = {()=> history.push('/reddit/profile')}
          >
            Check your Reddit profile
          </Button>
          <Button>View posts by you</Button>
          <Button>Manage accounts</Button>
          <Button>Buy coins</Button>
        </div>
      </div>
    ) 
  }
}

export default withRouter(MyRedditInfo);