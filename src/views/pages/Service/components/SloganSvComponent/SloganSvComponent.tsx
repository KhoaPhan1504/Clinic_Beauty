import React from 'react';
import {
  DescribeText,
  Slogan,
  SloganButtonImage,
  SloganButtonText,
  SloganWrapper,
  SloganWrapperButton,
  SloganWrapperText,
  TitleText,
} from './SloganSv.style';
import Play_Icon from '../../../../../assets/images/service/Play_Service.png';

const SloganSvComponent: React.FC = () => {
  return (
    <Slogan>
      <SloganWrapper>
        <SloganWrapperText>
          <TitleText>
            Best responsibility and service for our customers
          </TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </DescribeText>
        </SloganWrapperText>
        <SloganWrapperButton>
          <SloganButtonImage src={Play_Icon} />
          <SloganButtonText>Treatments Videos</SloganButtonText>
        </SloganWrapperButton>
      </SloganWrapper>
    </Slogan>
  );
};

export default SloganSvComponent;
