import React from 'react';
import {
  DescribeText,
  TipText,
  TitleText,
  Vision,
  VisionImage,
  VisionWrapper,
  VisionWrapperImage,
  VisionWrapperText,
} from './Vision.style';
import ImageVision from '../../../../../assets/images/about/Illustration-1.png';

const VisionComponent: React.FC = () => {
  return (
    <Vision>
      <VisionWrapper>
        <VisionWrapperImage>
          <VisionImage src={ImageVision} alt="Vision Image" />
        </VisionWrapperImage>
        <VisionWrapperText>
          <TipText>Our Vision</TipText>
          <TitleText>Be the best and go international</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            <br />
            <br />
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </DescribeText>
        </VisionWrapperText>
      </VisionWrapper>
    </Vision>
  );
};

export default VisionComponent;
