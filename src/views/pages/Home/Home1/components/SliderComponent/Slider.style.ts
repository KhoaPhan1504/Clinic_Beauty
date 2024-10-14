import tw from 'twin.macro';
import styled from 'styled-components';
import ButtonComponent from '../../../../../../components/Button/ButtonComponent';
import { Images } from '../../../../../../data/ComponentData/Images';
import {
  Describe,
  Title,
} from '../../../../../../components/Content/Text.style';
import { Container } from '@mui/material';

export const Slider = styled.div`
  ${tw`h-auto w-full mt-[-63px] x:(flex justify-center flex-col)`}
`;

export const SliderWrapper = styled.div`
  ${tw`items-center w-screen m-auto pt-[135px] h-full bg-no-repeat`}
  background-image: url(${Images.sliderBG});
`;
export const SliderContainer = styled(Container)`
  max-width: 1180px !important;
  ${tw`mt-[66px] flex items-center flex-col h-auto`}
  ${tw`sm:(flex-col) xl:(flex-row) 2xl:(justify-center)`}
`;

export const SliderWrapperText = styled.div`
  ${tw`flex justify-center flex-col px-[16px] h-full mt-[60px] sm:w-auto`}
`;

export const SliderMainChild = styled.div`
  ${tw`m-auto text-center xl:(text-left mb-[20px] ml-[19px])`}
`;

export const SliderMainTitle = styled(Title)`
  ${tw`text-48 leading-[60px] w-auto h-[128px] x:w-[430px] 2xl:w-auto`}
`;

export const SliderMainDescribe = styled(Describe)`
  ${tw`font-medium w-auto h-[54px] text-color-title mt-[80px] md:mt-0 xl:(w-[474px]) 2xl:w-auto`}
`;

export const SliderButton = styled.div`
  ${tw`pt-[67px] lg:pt-[27px]`}
`;

export const Button = styled(ButtonComponent)`
  ${tw`w-[200px] h-[58.36px]`}
`;

export const SliderWrapperImage = styled.div`
  ${tw`mt-[60px] sm:(flex justify-center) xl:(w-[60%] pl-[7px]) 2xl:(w-[45%] pr-0)`}
`;

export const SliderImage = styled.img`
  ${tw`w-auto h-auto`}
`;

export const SliderButtonGroup = styled.div`
  ${tw`flex justify-center mt-[35px] xl:mt-[110px] x:mt-[137px] 2xl:mt-[190px]`}
`;

export const SliderBtn = styled(ButtonComponent)`
  ${tw`w-[14.82px] h-[3.09px] bg-slider-btn rounded-[50px]`}
`;
export const SliderBtnActive = styled(ButtonComponent)`
  ${tw`w-[25.31px] h-[8.15px] bg-slider-btn-active rounded-[50px] mx-[9px]`}
`;
