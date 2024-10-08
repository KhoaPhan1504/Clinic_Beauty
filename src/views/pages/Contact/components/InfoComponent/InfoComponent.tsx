import React, { useEffect, useState } from 'react';
import {
  ContentContainer,
  DescribeText,
  Description,
  IconWrapper,
  InfoCard,
  InfoCardsContainer,
  Section,
  Subtitle,
  TipText,
  TitleText,
} from './Info.style';
import { contactInfo } from '../../../../../data/Contact/contactData';
import Container from '../../../../../components/Container/Container';

interface Infoinfops {
  id: number;
  imgSrc?: string;
  imageAlt?: string;
  tip?: string;
  subtile?: string;
  description?: string;
  className?: string;
}

const InfoComponent: React.FC = () => {
  const [infos, setInfo] = useState<Infoinfops[]>([]);
  const [activeCard, setActiveCard] = useState<number>(2);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2);
  };

  useEffect(() => {
    setInfo(contactInfo);
  });
  return (
    <Section>
      <Container>
        <ContentContainer>
          <TipText>Get in Touch</TipText>
          <TitleText>Get direct handling by us</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </DescribeText>
        </ContentContainer>
        <InfoCardsContainer>
          {infos.map((info) => (
            <InfoCard
              key={info.id}
              data-id={info.id}
              isActive={info.id === activeCard}
              onMouseEnter={() => handleMouseEnter(info.id)}
              onMouseLeave={handleMouseLeave}
              className={info.id === activeCard ? 'active' : ''}
            >
              <IconWrapper>
                <img
                  src={info.imgSrc}
                  alt={info.imageAlt}
                  className="h-full w-full object-cover"
                />
              </IconWrapper>
              <TipText className="mt-[47px]">{info.tip}</TipText>
              <Subtitle>{info.subtile}</Subtitle>
              <Description>{info.description}</Description>
            </InfoCard>
          ))}
        </InfoCardsContainer>
      </Container>
    </Section>
  );
};

export default InfoComponent;
