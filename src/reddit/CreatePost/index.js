import React, { Component } from 'react';
import './CreatePost.css';
import {TextField, Button} from '@material-ui/core';
import {DropzoneArea} from 'material-ui-dropzone';
import {withRouter} from 'react-router-dom';
import {createPost} from '../../actions/RedditActions';
import {connect} from 'react-redux';


class CreatePost extends Component {
  state = {
    title: null,
    desc: null,
    img: null,
    tags: null
  }

  handlePostCreate(){
    const {title, desc, img, tags} = this.state;
    const {history} = this.props;
    this.props.createPost(title, desc, img[0], tags)
    history.push('/reddit/home');
  }

  render() {
    const {history} = this.props;

    return (
      <div className='createpost'>
        <p>Create a Post</p>
        <div className='createpost__inp'>
          <TextField
            label = "Title"
            placeholder = "title"
            variant = "outlined"
            style = {{width:'90%'}}
            value = {this.state.title}
            onChange = {(e) => this.setState({title: e.target.value})}
          />

          <TextField
            label = "Description"
            placeholder = "desc (optional)"
            multiline = {true}
            rows = {5}
            variant = "outlined"
            style = {{width:'90%', marginTop: 20}}
            value = {this.state.desc}
            onChange = {(e) => this.setState({desc: e.target.value})}
          />

          <div className='createpost__img'>
            <p>Image</p>
            <DropzoneArea 
              acceptedFiles={['image/*']}
              dropzoneText={"Drag and drop an image here or click"}
              onChange = {(files) => this.setState({img: files})}
              showAlerts = {false}
              filesLimit = {1}
            />
          </div>

          <TextField
            label = "Tags"
            placeholder = "comma seperated tags"
            variant = "outlined"
            style = {{width:'90%', marginTop:20}}
            value = {this.state.tags}
            onChange = {(e) => this.setState({tags: e.target.value})}
          />

          <div className='createpost__btn'>
            <Button variant='outlined' style={{marginRight:20}}
                    onClick = {()=> history.push('/reddit/home')}
            >Cancel</Button>
            <Button variant='contained' style={{marginRight:20}}
                    onClick = {()=> this.handlePostCreate()}
            >Post</Button>
          </div>

        </div>
      </div>
    )
  }
}


export default connect(null, {createPost})(withRouter(CreatePost));
