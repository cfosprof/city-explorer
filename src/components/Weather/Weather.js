import { Card, Alert } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiWindy } from 'react-icons/wi';

const Weather = ({ forecastData, error }) => {
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!forecastData) return null;

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
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  const chunks = chunkArray(forecastData, 1);

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
                <Card.Title className="text-center mb-3">{forecast.date}</Card.Title>
                <div className="d-flex justify-content-center mb-3">
                  {getIcon(forecast.description)}
                </div>
                <Card.Text className="text-center">
                  {forecast.description.charAt(0).toUpperCase() + forecast.description.slice(1)}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </Carousel>
  );
}
  export default Weather