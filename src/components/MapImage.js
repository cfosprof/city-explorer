import React, { Component } from 'react';

class MapImage extends Component {
  render() {
    const { latitude, longitude, zoom = 13, width = 600, height = 400 } = this.props;
    const locationIQAPIKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;
    const mapURL = `https://maps.locationiq.com/v3/staticmap?key=${locationIQAPIKey}&center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&format=png`;

    return (
      <div>
        <img src={mapURL} alt="Map" width={width} height={height} />
      </div>
    );
  }
}

export default MapImage;
// import React from 'react';

// const MapImage = ({ latitude, longitude, zoom = 13, width = 600, height = 400 }) => {
//   const locationIQAPIKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;
//   const mapURL = `https://maps.locationiq.com/v3/staticmap?key=${locationIQAPIKey}&center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&format=png`;

//   return (
//     <div>
//       <img src={mapURL} alt="Map" width={width} height={height} />
//     </div>
//   );
// };

// export default MapImage;