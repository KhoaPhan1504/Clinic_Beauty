import React from 'react';
import {
  DescribeText,
  TipText,
  TitleText,
  Mission,
  MissionImage,
  MissionWrapper,
  MissionWrapperImage,
  MissionWrapperText,
  ProfessionBG,
} from './Mission.style';
import ImageMission from '../../../../../assets/images/about/Illustration-2.png';
import BG from '../../../../../assets/images/about/Bubble BG Footer.png';

const MissionComponent: React.FC = () => {
  return (
    <Mission>
      <ProfessionBG src={BG} />
      <MissionWrapper>
        <MissionWrapperText>
          <TipText>Our Mission</TipText>
          <TitleText>Special & premium service to any clients</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            <br />
            <br />
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </DescribeText>
        </MissionWrapperText>
        <MissionWrapperImage>
          <MissionImage src={ImageMission} alt="Mission Image" />
        </MissionWrapperImage>
      </MissionWrapper>
    </Mission>
  );
};

export default MissionComponent;
