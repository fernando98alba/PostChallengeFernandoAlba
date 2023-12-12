import {
  CREATE_POST,
  DELETE_POST,
  FILTER_POSTS,
  GET_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  filterPosts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        filterPosts: action.payload
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        filterPosts: [...state.posts, action.payload]
      };

    case DELETE_POST:

      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        filterPosts: state.posts.filter((post) => post.id !== action.payload),
      };
    
    case FILTER_POSTS:
      return {
        ...state,
        filterPosts: state.posts.filter((post) => post.name.toLowerCase().includes(action.payload.toLowerCase())),
      };

    default:
      return state;
  }
}

export default postReducer;