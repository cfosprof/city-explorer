import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LocationForm = (props) => {
  // Set 'location' state and its update function 'setLocation'
  const [location, setLocation] = useState('');

  // Handle form submission by calling the 'onSearch' function passed as a prop
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(location);
  };

  // Handle input change by updating the 'location' state variable
  const handleChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  // Render the location form with a text input and a search button
  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingLocation" label="Explore" className="mb-3">
        <Form.Control
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Explore"
        />
      </FloatingLabel>
      <Button type="submit" className="search-button">Search</Button>
    </Form>
  );
};

export default LocationForm;
