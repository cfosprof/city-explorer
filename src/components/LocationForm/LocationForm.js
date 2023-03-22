import React, { Component } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered");
    this.props.onSearch(this.state.location);
  };

  handleChange = (e) => {
    const newLocation = e.target.value;
    console.log("Input value:", newLocation);
    this.setState({ location: newLocation });
  };

  render() {
    const { location } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FloatingLabel controlId="floatingLocation" label="Explore" className="mb-3">
          <Form.Control
            type="text"
            value={location}
            onChange={this.handleChange}
            placeholder="Explore"
          />
        </FloatingLabel>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default LocationForm;