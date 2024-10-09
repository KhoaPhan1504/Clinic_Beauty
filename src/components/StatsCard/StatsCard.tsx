import React from 'react';
import {
  Container,
  Description,
  Image,
  TextContainer,
  Title,
} from './Stat.style';

interface StatsCardProps {
  title: string;
  desc: string;
  icon: string;
  isActive?: boolean;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  desc,
  icon,
  title,
  isActive,
  className,
}) => {
  return (
    <Container className={className} isActive={isActive}>
      <Image src={icon} alt="" />
      <TextContainer isActive={isActive}>
        <Title>{title}</Title>
        <Description isActive={isActive}>{desc}</Description>
      </TextContainer>
    </Container>
  );
};

export default StatsCard;
