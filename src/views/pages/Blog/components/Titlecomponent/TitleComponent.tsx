import React from 'react';
import { BlogTitle, LinkText, TitleText, TitleWrapper } from './Title.style';

const TitleComponent: React.FC = () => {
  return (
    <BlogTitle>
      <TitleWrapper>
        <TitleText>Blog</TitleText>
        <LinkText>Home • Blog</LinkText>
      </TitleWrapper>
    </BlogTitle>
  );
};

export default TitleComponent;
