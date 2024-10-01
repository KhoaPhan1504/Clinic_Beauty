import React from 'react';
import {
  About,
  AboutContainer,
  AboutImage,
  AboutText,
  AboutWrapper,
  DescribeText,
  ImageLarge,
  ImagePlay,
  TipText,
  TitleText,
} from './About.style';
import PlayAbout from '../../../../../assets/images/about/Play Button.png';

interface AboutProps {
  tipText: string;
  titleText: string;
  describeText: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutComponent: React.FC<AboutProps> = ({
  tipText,
  titleText,
  describeText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <About>
      <AboutWrapper>
        <AboutText>
          <AboutContainer>
            <TipText>{tipText}</TipText>
            <TitleText>{titleText}</TitleText>
            <DescribeText>{describeText}</DescribeText>
          </AboutContainer>
        </AboutText>
        <AboutImage>
          <ImageLarge src={imageSrc} alt={imageAlt} />
          <ImagePlay src={PlayAbout} />
        </AboutImage>
      </AboutWrapper>
    </About>
  );
};

export default AboutComponent;
