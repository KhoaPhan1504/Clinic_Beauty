import React, { useEffect, useState } from 'react';
import {
  CardContainer,
  ContentContainer,
  DateTime,
  Description,
  ImageContainer,
  StyledImage,
} from './RecentCard.style';
import { Widget } from '../../../data/BlogPage/blogData';

interface RecentProps {
  id: number;
  imageSrc: string;
  day: string;
  des: string;
}

const RecentCard: React.FC = () => {
  const [recents, setRecent] = useState<RecentProps[]>([]);

  useEffect(() => {
    setRecent(Widget);
  }, []);

  return (
    <>
      {recents.map((recent) => (
        <CardContainer key={recent.id}>
          <ImageContainer>
            <StyledImage src={recent.imageSrc} />
          </ImageContainer>
          <ContentContainer>
            <DateTime>{recent.day}</DateTime>
            <Description>{recent.des}</Description>
          </ContentContainer>
        </CardContainer>
      ))}
    </>
  );
};

export default RecentCard;
