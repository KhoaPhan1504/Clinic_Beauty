import React from 'react';
import {
  CategoriesList,
  CategoryItem,
  Container,
  Title,
} from './Categories.style';

const Categories: React.FC = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <CategoriesList>
        <CategoryItem>Consultation</CategoryItem>
        <CategoryItem>Beauty</CategoryItem>
        <CategoryItem>Treatments</CategoryItem>
        <CategoryItem>News</CategoryItem>
      </CategoriesList>
    </Container>
  );
};

export default Categories;
