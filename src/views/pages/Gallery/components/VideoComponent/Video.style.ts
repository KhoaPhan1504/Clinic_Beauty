import styled from 'styled-components';
import tw from 'twin.macro';
import Background_Mask from '../../../../../assets/images/gallery/Background Mask.png';
import Background from '../../../../../assets/images/gallery/BG_Video.png';
import { Describe, Title } from '../../../../../components/Content/Text.style';

export const Video = styled.div`
  ${tw`relative w-auto h-[628px] bg-center bg-no-repeat sm:mt-[130px] xl:mt-[126px] 2xl:bg-cover`}
  background-image: url(${Background});

  &::before {
    content: '';
    ${tw`absolute inset-0 bg-cover bg-center z-1 `}
    background-image: url(${Background_Mask});
  }
`;

export const VideoWrapper = styled.div`
  ${tw`relative z-10 flex flex-col justify-center text-center`}
`;

export const VideoWrapperText = styled.div`
  ${tw`mt-[162px] flex justify-center flex-col items-center`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[51px] text-color-white mt-[9px] px-[60px] sm:w-auto xl:w-[732px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[56px] text-color-default mt-[13px] sm:(w-auto px-[5px]) xl:(w-[555px] px-0)`}
`;

export const VideoWrapperButton = styled.div`
  ${tw`flex h-auto w-auto items-center justify-center mt-[21px]`}
`;

export const VideoButtonImage = styled.img`
  ${tw`h-auto w-auto`}
`;
