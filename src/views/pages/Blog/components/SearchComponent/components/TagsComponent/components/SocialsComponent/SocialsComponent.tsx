import React from 'react';
import {
  Container,
  Icon,
  IconContainer,
  IconWrapper,
  Title,
} from './Social.style';
import { Social } from '../../../../../../../../../data/BlogPage/blogData';

const Socials: React.FC = () => {
  return (
    <Container>
      <Title>Social Connect</Title>
      <IconContainer>
        {Social.map((social, index) => (
          <IconWrapper>
            <Icon src={social} key={index} />
          </IconWrapper>
        ))}
      </IconContainer>
    </Container>
  );
};

export default Socials;
