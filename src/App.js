import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import LocationForm from './components/LocationForm/LocationForm.js';
import LocationInfo from './components/LocationInfo/LocationInfo.js';
import Weather from './components/Weather/Weather';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';


const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  const fetchCoordinates = async (location) => {
    try {
      const response = await axios.get(
        'https://us1.locationiq.com/v1/search.php',
        {
          params: {
            key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
            q: location,
            format: 'json',
          },
        }
      );
      const data = response.data[0];
      setLocationData(data);
      setErrorMessage(null);
      
      try {
        const weatherResponse = await axios.get(`${process.env.REACT_APP_BACKENDURL}/weather`, {
          params: {
            lat: data.lat,
            lon: data.lon,
          },
        });
        const forecastData = weatherResponse.data;
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
        <Row className="mb-3">
          <Col>
            <LocationForm onSearch={fetchCoordinates} />
          </Col>
        </Row>
        {errorMessage && (
          <Row className="mb-3">
            <Col>
              <div className="alert alert-danger">{errorMessage}</div>
            </Col>
          </Row>
        )}
        <Row className="mb-3">
          <Col>
            <LocationInfo locationData={locationData} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Weather forecastData={forecastData} error={weatherError} />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default App;
