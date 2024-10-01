import React from 'react';
import {
  DescribeText,
  Slogan,
  SloganButtonImage,
  SloganButtonText,
  SloganWrapper,
  SloganWrapperButton,
  SloganWrapperText,
  TipText,
  TitleText,
} from './Slogan.style';

interface SloganProps {
  background?: string;
  tipText?: string;
  titleText?: string;
  describeText?: string;
  hasButton?: boolean;
  isColumnLayout?: boolean;
  showButtonText?: boolean;
  imageSrc?: string;
}

const SloganComponent: React.FC<SloganProps> = ({
  background,
  tipText,
  titleText,
  describeText,
  hasButton = false,
  isColumnLayout = false,
  showButtonText = true,
  imageSrc,
}) => {
  return (
    <Slogan background={background}>
      <SloganWrapper>
        <SloganWrapperText>
          <TipText>{tipText}</TipText>
          <TitleText>{titleText}</TitleText>
          <DescribeText>{describeText}</DescribeText>
        </SloganWrapperText>
        {hasButton && (
          <SloganWrapperButton className={isColumnLayout ? 'column' : 'row'}>
            <SloganButtonImage src={imageSrc} />
            {showButtonText && <SloganButtonText>Button Text</SloganButtonText>}
          </SloganWrapperButton>
        )}
      </SloganWrapper>
    </Slogan>
  );
};

export default SloganComponent;
