import React, { Component } from 'react';
import './FilterPost.css';
import {withRouter} from 'react-router-dom';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CallMadeIcon from '@material-ui/icons/CallMade';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from '@material-ui/core';

class FilterPost extends Component {
  render() {
    const {history} = this.props;

    return (
      <div className='filter'>
        <div filter='filter__new'>
          <Button>
            <Brightness5Icon/>
            <p>New</p>
          </Button>
        </div>
        <div filter='filter__new'>
          <Button>
            <WhatshotIcon/>
            <p>Hot</p>
          </Button>
        </div>
        <div filter='filter__new'>
          <Button>
            <CallMadeIcon/>
            <p>Trending</p>
          </Button>
        </div>
        <div filter='filter__new'>
          <Button
            onClick={()=> history.push('/reddit/create-post')}>
            <AddCircleOutlineIcon/>
            <p>Create</p>
          </Button>
        </div>
      </div>
    )
  }
}


export default withRouter(FilterPost);