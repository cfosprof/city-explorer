import React from 'react';
import MapImage from '../MapImage.js';

const LocationInfo = ({ locationData }) => {
  if (!locationData) return null;

  return (
    <div>
      <h2>{locationData.display_name}</h2>
      <p>Latitude: {locationData.lat}</p>
      <p>Longitude: {locationData.lon}</p>
      <MapImage latitude={locationData.lat} longitude={locationData.lon} />
    </div>
  );
};

export default LocationInfo;