import React from 'react';
import { Circle, Container } from './Pagination.style';

const Pagination: React.FC = () => {
  return (
    <Container>
      <Circle isActive={true}>1</Circle>
      <Circle>2</Circle>
      <Circle>3</Circle>
    </Container>
  );
};

export default Pagination;
