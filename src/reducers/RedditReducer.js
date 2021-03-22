import {GET_POSTS, GET_LIKE, LIKE_ACTION, CREATE_POSTS, GET_COMMENT, 
        POST_COMMENT, GET_COMMENT_LIKES, POST_COMMENT_LIKES, LOGOUT, initialEmptyResult} from '../actions/type';
import ReducerHelper from './ReducerHelper';

const initialState = {
  posts: initialEmptyResult,
  likes: initialEmptyResult,
  comments: initialEmptyResult,
  comment_likes: initialEmptyResult
}

const RedditReducer = (state=initialState, action) =>{
  switch(action.type){
    case GET_POSTS:
      return{
        ...state,
        posts: ReducerHelper.handleRequestData(action)
      }
    case GET_LIKE:
      return{
        ...state,
        likes: ReducerHelper.handleRequestData(action)
      }
    case LIKE_ACTION:
      if(action.status == 'SUCCESS'){
        let post_id = parseInt(action.formdata.get('post'))
        let user_id = parseInt(action.formdata.get('liked_by'))
        var new_likes = state.likes.data.filter(function(item){
          if(item.post === post_id){
            if(item.liked_by === user_id){
              return false
            }else{
              return true
            }
          }else{
            return true
          }
        })
        let like_instance = {}
        like_instance['post'] = post_id
        like_instance['liked_by'] = user_id
        like_instance['is_liked'] = action.formdata.get('is_liked')
        like_instance['is_disliked'] = action.formdata.get('is_disliked')
        new_likes.push(like_instance)
        action['response'] = new_likes
        return{
          ...state,
          likes: ReducerHelper.handleRequestData(action)
        }
      }else{
        return {...state}
      }
    case GET_COMMENT:
      return{
        ...state,
        comments: ReducerHelper.handleRequestData(action)
      }
    case POST_COMMENT:
      if(action.status == 'SUCCESS'){
        if(state.comments.data.length > 0){
          state.comments.data.push(action.response)
          action.response = state.comments.data
        }else{
          action.response = [action.response]
        }
      }
      return{
        ...state,
        comments: action.status=='SUCCESS' ?ReducerHelper.handleRequestData(action) : state.comments
      }
    case GET_COMMENT_LIKES:
      return{
        ...state,
        comment_likes: ReducerHelper.handleRequestData(action)
      }
    case POST_COMMENT_LIKES:
      if(action.status == 'SUCCESS'){
        var com_id = parseInt(action.response['comment'])
        var username = action.response['username']
        
        var new_likes = state.comment_likes.data.filter(function(item){
          if(item.comment == com_id){
            if(item.username == username){
              return false
            }else{
              return true
            }
          }else{
            return true
          }
        })
        let like_instance = {}
        like_instance['comment'] = com_id;
        like_instance['username'] = username;
        like_instance['is_liked'] = action.response['is_liked']
        like_instance['is_disliked'] = action.response['is_disliked']
        new_likes.push(like_instance)
        action['response'] = new_likes
        return{
          ...state,
          comment_likes: ReducerHelper.handleRequestData(action)
        }
      }else{
        return{
          ...state
        }
      }

    default:
      return state
  }
}

export default RedditReducer;