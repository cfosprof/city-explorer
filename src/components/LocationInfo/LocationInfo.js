import React from 'react';

const LocationInfo = ({ locationData }) => {
  // const { locationData } = props;
  
  // If there is no location data, do not render anything
  if (!locationData) return null;

  // Render the location information including the formatted address, latitude, longitude,
  // and a map image using the MapImage component
  return (
    <div>
      <h2>{locationData.formatted_address}</h2>
      <p>Latitude: {locationData.geometry.location.lat}</p>
      <p>Longitude: {locationData.geometry.location.lng}</p>
    </div>
  );
};

export default LocationInfo;
