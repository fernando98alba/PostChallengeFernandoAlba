import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postReducer';
export default function store() {
  return configureStore({
    reducer: {
      posts: postReducer,
    }
  })
}