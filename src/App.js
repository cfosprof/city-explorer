import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import LocationForm from './components/LocationForm/LocationForm.js';
import LocationInfo from './components/LocationInfo/LocationInfo.js';
import Weather from './components/Weather/Weather';
import Movies from './components/Movies/Movies';
import MapImage from './components/MapImage';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const App = () => {
  // Define states to hold location data, forecast data, movie data, and error messages.
  const [locationData, setLocationData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [movieError, setMovieError] = useState(null);
  // const [formatted_address, setFormattedAddress] = useState(null);

  // Fetch latitude and longitude of the location
  const fetchCoordinates = async (location) => {
    try {
      // Fetch location data using Google Maps API
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&address=${location}`);
      const data = response.data.results[0];
      // const formattedAddress = formatAddress(data);

      // Set location data and reset error messages.
      setLocationData(data);
      // setFormattedAddress(data.formatted_address);
      console.log(data);
      setErrorMessage(null);

      // Fetch movie data from backend API using location returned from locationIQ API. Set new movie data and reset error messages.
      try {
        const movieResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`, {
          params: {
            city: data.address_components[0].long_name,
          },
        });
        setMovies(movieResponse.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setMovieError(
          error.response
            ? error.response.data.error
            : 'Unable to fetch movie data. Please try again later.'
        );
      }
      // Fetch weather data from the backend API using latitude and longitude returned for data from locationIQ API.
      try {
        const weatherResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, {
          params: {
            lat: data.geometry.location.lat,
            lon: data.geometry.location.lng,
          },
        });
        const forecastData = weatherResponse.data;

        // Set forecast data and reset error messages.
        setForecastData(forecastData);
        setWeatherError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherError(
          error.response
            ? error.response.data.error
            : 'Unable to fetch weather data. Please try again later.'
        );
      }
    } catch (error) {

      console.error('Error fetching coordinates:', error);
      console.error('Error response:', error.response);
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
      setErrorMessage(
        error.response
          ? error.response.data.message
          : 'Unable to fetch coordinates. Please try again with a different location.'
      );
    }
  };

  return (
    <div className="App">
      <Container>
        {/* Render the location input form */}
        <Row className="mb-3">
          <Col>
            <LocationForm onSearch={fetchCoordinates} />
          </Col>
        </Row>
        {/* Render the error message if there is one */}
        {errorMessage && (
          <Row className="mb-3">
            <Col>
              <div className="alert alert-danger">{errorMessage}</div>
            </Col>
          </Row>
        )}
        {/* Render the location info component */}
        <LocationInfo locationData={locationData} />
    
        {/* Render the map image component */}
        {locationData && (
          <Row className="mb-3">
            <Col>
              <MapImage
                latitude={locationData.geometry.location.lat}
                longitude={locationData.geometry.location.lng}
                zoom={13}
                width={600}
                height={400}
              />
            </Col>
          </Row>
        )}
    
        {/* Render the weather component */}
        <Row className="mb-3">
          <Col>
            <Weather forecastData={forecastData} error={weatherError} />
          </Col>
        </Row>
    
        {/* Render the movie error message if there is one */}
        {movieError && (
          <Row className="mb-3">
            <Col>
              <div className="alert alert-danger">{movieError}</div>
            </Col>
          </Row>
        )}
    
        {/* Render the movies component */}
        <Row className="mb-3">
          <Col>
            <Movies movies={movies} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;


// return (
//   <div className="App">
//     <Container>
//       {/* Render the location input form */}
//       <Row className="mb-3">
//         <Col>
//           <LocationForm onSearch={fetchCoordinates} />
//         </Col>
//       </Row>
//       {/* Render the error message if there is one */}
//       {errorMessage && (
//         <Row className="mb-3">
//           <Col>
//             <div className="alert alert-danger">{errorMessage}</div>
//           </Col>
//         </Row>
//       )}
//       <Accordion>
//         {/* Render the location info component */}
//         <Card>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>
//               <Card.Header>Location Info</Card.Header>
//             </Accordion.Header>
//             <Accordion.Body>
//               <Card.Body>
//                 <LocationInfo locationData={locationData} />
//               </Card.Body>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Card>
//         {/* Render the map image component */}
//         {locationData && (
//           <Card>
//             <Accordion.Item eventKey="1">
//               <Accordion.Header>
//                 <Card.Header>Map Image</Card.Header>
//               </Accordion.Header>
//               <Accordion.Body>
//                 <Card.Body>
//                   <MapImage
//                     latitude={locationData.geometry.location.lat}
//                     longitude={locationData.geometry.location.lng}
//                     zoom={13}
//                     width={600}
//                     height={400}
//                   />
//                 </Card.Body>
//               </Accordion.Body>
//             </Accordion.Item>
//           </Card>
//         )}
//         {/* Render the weather component */}
//         <Card>
//           <Accordion.Item eventKey="2">
//             <Accordion.Header>
//               <Card.Header>Weather</Card.Header>
//             </Accordion.Header>
//             <Accordion.Body>
//               <Card.Body>
//                 <Weather forecastData={forecastData} error={weatherError} />
//               </Card.Body>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Card>
//         {/* Render the movies component */}
//         <Card>
//           <Accordion.Item eventKey="3">
//             <Accordion.Header>
//               <Card.Header>Movies</Card.Header>
//             </Accordion.Header>
//             <Accordion.Body>
//               <Card.Body>
//                 <Movies movies={movies} />
//               </Card.Body>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Card>
//       </Accordion>
//       {/* Render the movie error message if there is one */}
//       {movieError && (
//         <Row className="mb-3">
//           <Col>
//             <div className="alert alert-danger">{movieError}</div>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   </div>
// );


