import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from '../actions/posts';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const FilterPostsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value)
    setName(e.target.value);
    // Dispatch the addPost action
    dispatch(filterPosts({ name: e.target.value }));

    // Clear the form after submitting
  };

  return (
    <Container>
      <Col sm={6}>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Filtrar nombre" value={name} onChange={(e) => handleChange(e)} />
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
};

export default FilterPostsForm;
