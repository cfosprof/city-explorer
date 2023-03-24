import { Alert } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import WeatherSlide from './WeatherSlide';

const Weather = ({ forecastData, error }) => {
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!forecastData) return null;

  forecastData.sort((a, b) => new Date(a.date) - new Date(b.date));

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
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <WeatherSlide forecast={forecast} />
        </div>
      ))}
    </Carousel>
  );
};

export default Weather;
