// MovieCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie, onClick, expanded }) => {
  return (
    <Card className={`movie-card ${expanded ? 'expanded' : ''}`} onClick={onClick}>
      <Card.Img variant="top" src={movie.image_url} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Released on {movie.released_on}</small>
      </Card.Footer>
      <div className="movie-overlay">View Details</div>
      <div className="movie-details">
        <Card.Text>{movie.overview}</Card.Text>
      </div>
    </Card>
  );
};

export default MovieCard;
