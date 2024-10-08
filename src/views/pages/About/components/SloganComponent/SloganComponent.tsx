import React from 'react';
import {
  DescribeText,
  Slogan,
  SloganWrapper,
  SloganWrapperText,
  TipText,
  TitleText,
} from './Slogan.style';

const SloganComponent: React.FC = () => {
  return (
    <Slogan>
      <SloganWrapper>
        <SloganWrapperText>
          <TipText>Business Slogan</TipText>
          <TitleText>
            Best responsibility and service for our customers
          </TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </DescribeText>
        </SloganWrapperText>
      </SloganWrapper>
    </Slogan>
  );
};

export default SloganComponent;
