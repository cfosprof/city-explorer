import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LocationForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingLocation" label="Explore" className="mb-3">
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Explore"
        />
      </FloatingLabel>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default LocationForm;