//components/Weather/Weather.js
import { Card, Alert } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiWindy } from 'react-icons/wi';

const Weather = ({ forecastData, error }) => {
  // If there is an error related to weather, display an alert with the error message
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
    const dayMonth = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit' }).format(date);
    return { day, dayMonth };
  };

  // If there is no forecast data, do not render anything
  if (!forecastData) return null;


  forecastData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Define a function to get the appropriate weather icon based on the forecast description
  const getIcon = (description) => {
    description = description.toLowerCase();
    const iconClass = "weather-icon";
    if (description.includes('sunny')) return <WiDaySunny className={`${iconClass} text-warning`} />;
    if (description.includes('cloudy')) return <WiCloudy className={`${iconClass} text-secondary`} />;
    if (description.includes('rain')) return <WiRain className={`${iconClass} text-info`} />;
    if (description.includes('snow')) return <WiSnow className={`${iconClass} text-primary`} />;
    if (description.includes('thunderstorm')) return <WiThunderstorm className={`${iconClass} text-danger`} />;
    return <WiWindy className={`${iconClass} text-muted`} />;
  };

  // Define a function to chunk the forecast data into arrays of length '1' (one forecast per slide)
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk the forecast data into arrays of length '1' using the chunkArray function defined above
  const chunks = chunkArray(forecastData, 1);

  // Render a carousel with one slide per forecast, displaying the forecast date, description, and icon
  return (
    <Carousel
      showArrows
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      emulateTouch
      centerMode
      centerSlidePercentage={33.33}
      slidesToScroll={1}
      dynamicHeight
    >
      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex}>
          {chunk.map((forecast, index) => (
            <Card key={index} className="mb-4 shadow-lg weather-card">
              <Card.Body>
              <Card.Title className="text-center mb-3">
                <div>{formatDate(forecast.date).day}</div>
                 <small>{formatDate(forecast.date).dayMonth}</small>
              </Card.Title>
                <div className="d-flex justify-content-center mb-3">
                  {getIcon(forecast.description)}
                </div>
                <Card.Text className="text-center">
                  {forecast.description.charAt(0).toUpperCase() + forecast.description.slice(0)}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </Carousel>
  );
}

export default Weather;
