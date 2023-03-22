import React from 'react';
import MapImage from '../MapImage.js';

const LocationInfo = (props) => {
  const { locationData } = props;

  // If there is no location data, do not render anything
  if (!locationData) return null;

  // Render the location information including display name, latitude, longitude
  // and a map image using the MapImage component
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
