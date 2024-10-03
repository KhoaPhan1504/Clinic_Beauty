import React from 'react';
import {
  DescribeText,
  TitleText,
  Slogan,
  SloganWrapper,
  SloganWrapperText,
} from './Slogan.style';

const SloganComponent: React.FC = () => {
  return (
    <Slogan>
      <SloganWrapper>
        <SloganWrapperText>
          <TitleText>Customer satisfaction is our main goal</TitleText>
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
