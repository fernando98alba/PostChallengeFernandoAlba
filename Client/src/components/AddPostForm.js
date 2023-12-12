import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure title and content are not empty
    if (!name.trim() || !description.trim()) {
      alert('El post debe tener nombre y descripción');
      return;
    }

    // Dispatch the addPost action
    dispatch(createPost({ name, description }));

    // Clear the form after submitting
    setName('');
    setDescription('');
  };

  return (
    <Col sm={5}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control placeholder="Nombre" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br/>
          <Form.Control placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
          <br/>
          <Button variant="primary" type="submit">Crear Post</Button>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default AddPostForm;
