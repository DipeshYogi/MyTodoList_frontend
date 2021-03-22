import {GET_POSTS, GET_LIKE, LIKE_ACTION, CREATE_POSTS, UPDATE_PROFILE, 
        POST_COMMENT, GET_COMMENT, GET_COMMENT_LIKES, POST_COMMENT_LIKES} from './type';
import {doAuthGetRequest, doAuthPostRequest, doAuthPutRequest} from '../services/AuthenticatedServices';

export const getPosts = () => dispatch =>{
  let url = '/reddit/posts/';
  dispatch(doAuthGetRequest(url, GET_POSTS))
}


export const getLikes = () => dispatch =>{
  let url = '/reddit/likes/';
  dispatch(doAuthGetRequest(url, GET_LIKE))
}


export const likeAction = (postId, userId, is_liked, is_disliked) => dispatch =>{
  let url = 'reddit/likes/';
  let formdata = new FormData();
  formdata.append('post', postId)
  formdata.append('liked_by', userId)
  formdata.append('is_liked', is_liked)
  formdata.append('is_disliked', is_disliked)

  dispatch(doAuthPostRequest(url, LIKE_ACTION, formdata))
}


export const createPost = (title, desc, img, tags) => dispatch =>{
  let url = '/reddit/posts/';
  let formdata = new FormData();
  let file_req = true;
  formdata.append('title', title)
  formdata.append('desc', desc)

  if(img){
    formdata.append('img', img)
  }
  
  if(tags){
    formdata.append('post_tags', tags)
  }

  dispatch(doAuthPostRequest(url, CREATE_POSTS, formdata, file_req))
}


export const updateProfile = (username, email) => dispatch =>{
  let url = '/accounts/user-update/'
  let formdata = new FormData()
  formdata.append('username', username)
  formdata.append('email', email)
  dispatch(doAuthPutRequest(url, UPDATE_PROFILE, formdata))
}


export const postComment = (postid, comm, parent) => dispatch =>{
  let url = '/reddit/comments/';
  let formdata = new FormData();
  formdata.append('post', postid)
  formdata.append('comm', comm)
  formdata.append('parent', parent)

  dispatch(doAuthPostRequest(url, POST_COMMENT, formdata))
}


export const getComments = (postid) => dispatch =>{
  let url = '/reddit/comments/' + postid + '/';
  dispatch(doAuthGetRequest(url, GET_COMMENT))
}


export const getCommentLikes = (id) => dispatch =>{
  let url = '/reddit/comment-like/'+ id + '/';
  dispatch(doAuthGetRequest(url, GET_COMMENT_LIKES))
}


export const postCommentLike = (comm, is_liked, is_disliked) => dispatch =>{
  let url = '/reddit/comment-like/';
  let formdata = new FormData();
  formdata.append('comment', comm)
  formdata.append('is_liked', is_liked)
  formdata.append('is_disliked', is_disliked)

  dispatch(doAuthPostRequest(url, POST_COMMENT_LIKES, formdata))
}