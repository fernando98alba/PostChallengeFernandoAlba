import {
  CREATE_POST,
  DELETE_POST,
  FILTER_POSTS,
  ERROR,
  GET_POSTS
} from './types';

export function createPost(data){
  return (dispatch) => {
    fetch('http://localhost:3000/posts', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          dispatch({type: CREATE_POST, payload: json})
        })
      } else {
        return response.json().then((json) => {
          return Promise.reject(json)
        })
      }
    })
    .catch(error => {
      dispatch({type: ERROR, payload: error})
    })
  }
}

export function getPosts(){
  return (dispatch) => {
    fetch('http://localhost:3000/posts', {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          dispatch({type: GET_POSTS, payload: json})
        })
      } else {
        return response.json().then((json) => {
          return Promise.reject(json)
        })
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({type: ERROR, payload: error})
    })
  }
}

export function deletePost(id){
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        response.json().then(() => {
          dispatch({type: DELETE_POST, payload: id})
        })
      } else {
        return response.json().then((json) => {
          return Promise.reject(json)
        })
      }
    })
    .catch(error => {
      dispatch({type: ERROR, payload: error})
    })
  }
}

export function filterPosts(data) {
  return (dispatch) => {
      dispatch({type: FILTER_POSTS, payload: data.name})
  }
}