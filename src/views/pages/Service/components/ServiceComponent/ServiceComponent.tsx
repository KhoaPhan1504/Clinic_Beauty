import React from 'react';
import {
  DescribeText,
  Service,
  ServiceImage,
  ServiceWrapper,
  ServiceWrapperImage,
  ServiceWrapperImg,
  ServiceWrapperText,
  TipText,
  TitleText,
} from './Service.style';
import { SvImage } from '../../../../../data/ComponentData/Images';

const ServiceComponent: React.FC = () => {
  return (
    <Service>
      <ServiceWrapper>
        <ServiceWrapperText>
          <TipText>Our Services</TipText>
          <TitleText>We focus on your beauty</TitleText>
          <DescribeText>Lorem ipsum dolor sit amet</DescribeText>
        </ServiceWrapperText>
        <ServiceWrapperImage>
          <ServiceWrapperImg>
            <ServiceImage src={SvImage.serviceImg1} alt="Service Image" />
            <ServiceImage src={SvImage.serviceImg2} alt="Service Image" />
            <ServiceImage src={SvImage.serviceImg3} alt="Service Image" />
            <ServiceImage src={SvImage.serviceImg4} alt="Service Image" />
          </ServiceWrapperImg>
        </ServiceWrapperImage>
      </ServiceWrapper>
    </Service>
  );
};

export default ServiceComponent;
