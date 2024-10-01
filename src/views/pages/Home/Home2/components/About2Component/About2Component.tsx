import React from 'react';
import {
  About,
  AboutButton,
  AboutImage,
  AboutWrapper,
  AboutWrapperImage,
  AboutWrapperText,
  DescribeText,
  TipText,
  TitleText,
} from './About2.style';

interface AboutProps {
  tipText: string;
  titleText: string;
  describeText: string;
  imageSrc: string;
  imageAlt: string;
  textButton?: string;
  reverse?: boolean;
}

const About2Component: React.FC<AboutProps> = ({
  tipText,
  titleText,
  describeText,
  imageSrc,
  imageAlt,
  textButton,
  reverse = false,
}) => {
  return (
    <About>
      <AboutWrapper style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <AboutWrapperImage>
          <AboutImage src={imageSrc} alt={imageAlt} />
        </AboutWrapperImage>
        <AboutWrapperText>
          <TipText>{tipText}</TipText>
          <TitleText>{titleText}</TitleText>
          <DescribeText>{describeText}</DescribeText>
          {textButton && <AboutButton textButton={textButton} />}
        </AboutWrapperText>
      </AboutWrapper>
    </About>
  );
};

export default About2Component;
