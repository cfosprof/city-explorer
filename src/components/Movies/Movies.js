import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Movies.css';
import MovieCard from './MovieCard';

const Movies = ({ movies }) => {
  console.log('Movies component props:', { movies });
  const [expanded, setExpanded] = useState({});

  if (!movies || movies.length === 0) return null;

  const toggleExpanded = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  return (
    <Row className="horizontal-scroll">
      {movies.map((movie, index) => (
        <Col key={index} md={4} className="mb-4 movie-col">
          <MovieCard
            movie={movie}
            onClick={() => toggleExpanded(index)}
            expanded={expanded[index]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Movies;