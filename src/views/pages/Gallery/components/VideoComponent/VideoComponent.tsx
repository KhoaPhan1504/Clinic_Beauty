import React from 'react';
import {
  DescribeText,
  TitleText,
  Video,
  VideoButtonImage,
  VideoWrapper,
  VideoWrapperButton,
  VideoWrapperText,
} from './Video.style';
import Play_Gallery from '../../../../../assets/images/gallery/Play_Gallery.png';

const VideoComponent: React.FC = () => {
  return (
    <Video>
      <VideoWrapper>
        <VideoWrapperText>
          <TitleText>Watch the video tour</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </DescribeText>
        </VideoWrapperText>
        <VideoWrapperButton>
          <VideoButtonImage src={Play_Gallery} />
        </VideoWrapperButton>
      </VideoWrapper>
    </Video>
  );
};

export default VideoComponent;
