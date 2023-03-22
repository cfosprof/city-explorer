///src/components/LocationInfo/LocationInfo.js
import React, { Component } from 'react';
import MapImage from '../MapImage.js';

class LocationInfo extends Component {
  render() {
    const { locationData } = this.props;

    if (!locationData) return null;
    return (
      <div>
        <h2>{locationData.display_name}</h2>
        <p>Latitude: {locationData.lat}</p>
        <p>Longitude: {locationData.lon}</p>
        <MapImage latitude={locationData.lat} longitude={locationData.lon} />
      </div>
    );
  }
}

export default LocationInfo;