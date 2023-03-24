import { Card } from 'react-bootstrap';
import formatDate from '../Utils/FormatDate';
import WeatherIcon from './WeatherIcon';

const WeatherSlide = ({ forecast }) => (
  <Card className="mb-4 shadow-lg weather-card">
    <Card.Body>
      <Card.Title className="text-center mb-3">
        <div>{formatDate(forecast.date).day}</div>
        <small>{formatDate(forecast.date).dayMonth}</small>
      </Card.Title>
      <div className="d-flex justify-content-center mb-3">
        <WeatherIcon description={forecast.description} />
      </div>
      <Card.Text className="text-center">
        {`${forecast.description.charAt(0).toUpperCase()}${forecast.description.slice(1)}`}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default WeatherSlide;
