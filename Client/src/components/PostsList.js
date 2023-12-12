import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost } from '../actions/posts';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';

const PostsList = () => {
  const dispatch = useDispatch();
  const filterPosts = useSelector((state) => state.posts.filterPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <Col sm={7}>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filterPosts.map((post) => (
            <tr>
              <td>
                {post.name}
              </td>
              <td>
                {post.description}
              </td>
              <td>
                <div type="button" onClick={() => {
                    const confirmBox = window.confirm(
                      "¿Seguro que quiere eliminar el post?"
                    )
                    if (confirmBox === true) {
                      handleDelete(post.id)
                    }
                  }
                }>
                  Eliminar
                </div>  
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
    
  );
};

export default PostsList;
