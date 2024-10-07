import React from 'react';
import { Container, TagGrid, Title } from './CloudTags.style';
import Tag from '../../../../../../../../../components/Tag/TagComponent';
import { Cloud } from '../../../../../../../../../data/BlogPage/blogData';

const CloudTags: React.FC = () => {
  return (
    <Container>
      <Title>Cloud Tags</Title>
      <TagGrid>
        {Cloud.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </TagGrid>
    </Container>
  );
};

export default CloudTags;
