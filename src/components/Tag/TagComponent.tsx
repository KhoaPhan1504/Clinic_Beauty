import React from 'react';
import { StyledTag } from './Tag.style';

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <>
      <StyledTag>{title}</StyledTag>
    </>
  );
};

export default Tag;
