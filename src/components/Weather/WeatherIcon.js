import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiWindy } from 'react-icons/wi';

const WeatherIcon = ({ description }) => {
  description = description.toLowerCase();
  const iconClass = "weather-icon";
  if (description.includes('sunny')) return <WiDaySunny className={`${iconClass} text-warning`} />;
  if (description.includes('cloudy')) return <WiCloudy className={`${iconClass} text-secondary`} />;
  if (description.includes('rain')) return <WiRain className={`${iconClass} text-info`} />;
  if (description.includes('snow')) return <WiSnow className={`${iconClass} text-primary`} />;
  if (description.includes('thunderstorm')) return <WiThunderstorm className={`${iconClass} text-danger`} />;
  return <WiWindy className={`${iconClass} text-muted`} />;
};

export default WeatherIcon;
