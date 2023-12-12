import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import AddPostForm from './components/AddPostForm';
import FilterPostsForm from './components/FilterPosts';
import PostsList from './components/PostsList';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
    <h1> Lista de Posts</h1>
      
        <FilterPostsForm />
        <Container>
          <Row>
            <PostsList posts={posts} />
            <AddPostForm />
          </Row>
        </Container>
    </div>
  );
}

export default App;
