//src/components/MapImage/MapImage.js
import React from 'react';

const MapImage = (props) => {
  const { latitude, longitude, zoom = 13, width = 600, height = 400 } = props;
  const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


  // Construct the URL for the map image using the latitude, longitude, zoom level, and
  // dimensions passed as props, as well as the LocationIQ API key stored in an environment variable
  const mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&key=${googleMapsAPIKey}`;


  // Render the map image with the URL constructed above
  return (
    <div>
      <img src={mapURL} alt="Map of the location" />
    </div>
  );
};

export default MapImage;
