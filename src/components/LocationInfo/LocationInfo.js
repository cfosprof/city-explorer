import React from 'react';
import MapImage from '../MapImage.js';

const LocationInfo = (props) => {
  const { locationData } = props;
  
  // If there is no location data, do not render anything
  if (!locationData) return null;

  // Render the location information including the formatted address, latitude, longitude,
  // and a map image using the MapImage component
  return (
    <div>
      <h2>{locationData.formatted_address}</h2>
      <p>Latitude: {locationData.geometry.location.lat}</p>
      <p>Longitude: {locationData.geometry.location.lng}</p>
      <MapImage latitude={locationData.lat} longitude={locationData.lon} />
    </div>
  );
};

export default LocationInfo;
