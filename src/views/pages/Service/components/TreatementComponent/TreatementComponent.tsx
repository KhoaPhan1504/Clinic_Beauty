import React from 'react';
import {
  Treatement,
  TreatementContainer,
  TreatementImage,
  TreatementRedirect,
  TreatementWrapper,
  TreatementWrapperImage,
  TreatementWrapperText,
  DescribeText,
  IconTreatement,
  Link,
  TipText,
  TitleText,
} from './Treatement.style';
import arrowRight from '../../../../../assets/images/service/angle-double-right.png';

interface TreatementProps {
  imageSrc?: string;
  imageAlt?: string;
  tipText?: string;
  titleText?: string;
  describeText?: string;
}

const TreatementComponent: React.FC<TreatementProps> = ({
  imageSrc,
  imageAlt,
  tipText,
  titleText,
  describeText,
}) => {
  return (
    <Treatement>
      <TreatementWrapper>
        <TreatementWrapperText>
          <TreatementContainer>
            <TipText>{tipText}</TipText>
            <TitleText>{titleText}</TitleText>
            <DescribeText>{describeText}</DescribeText>
          </TreatementContainer>
          <TreatementRedirect>
            <Link>Make an Appointment</Link>
            <IconTreatement src={arrowRight} />
          </TreatementRedirect>
        </TreatementWrapperText>
        <TreatementWrapperImage>
          <TreatementImage src={imageSrc} alt={imageAlt} />
        </TreatementWrapperImage>
      </TreatementWrapper>
    </Treatement>
  );
};

export default TreatementComponent;
