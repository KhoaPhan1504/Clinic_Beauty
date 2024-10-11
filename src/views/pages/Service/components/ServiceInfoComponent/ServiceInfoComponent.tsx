import React from 'react';
import {
  ServiceInfo,
  ServiceInfoContainer,
  ServiceInfoImage,
  ServiceInfoRedirect,
  ServiceInfoWrapper,
  ServiceInfoWrapperImage,
  ServiceInfoWrapperText,
  DescribeText,
  IconServiceInfo,
  Link,
  TipText,
  TitleText,
} from './ServiceInfo.style';
import arrowRight from '../../../../../assets/images/service/angle-double-right.png';

interface ServiceInfoProps {
  imageSrc?: string;
  imageAlt?: string;
  tipText?: string;
  titleText?: string;
  describeText?: string;
  className?: string;
}

const ServiceInfoComponent: React.FC<ServiceInfoProps> = ({
  imageSrc,
  imageAlt,
  tipText,
  titleText,
  describeText,
  className,
}) => {
  return (
    <ServiceInfo className={className}>
      <ServiceInfoWrapper>
        <ServiceInfoWrapperImage>
          <ServiceInfoImage src={imageSrc} alt={imageAlt} />
        </ServiceInfoWrapperImage>
        <ServiceInfoWrapperText>
          <ServiceInfoContainer>
            <TipText>{tipText}</TipText>
            <TitleText>{titleText}</TitleText>
            <DescribeText>{describeText}</DescribeText>
          </ServiceInfoContainer>
          <ServiceInfoRedirect>
            <Link>Make an Appointment</Link>
            <IconServiceInfo src={arrowRight} />
          </ServiceInfoRedirect>
        </ServiceInfoWrapperText>
      </ServiceInfoWrapper>
    </ServiceInfo>
  );
};

export default ServiceInfoComponent;
