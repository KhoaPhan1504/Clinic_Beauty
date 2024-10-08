import tw from 'twin.macro';
import styled from 'styled-components';
import ButtonComponent from '../../../../../../components/Button/ButtonComponent';
import { Images } from '../../../../../../data/ComponentData/Images';
import {
  Describe,
  Title,
} from '../../../../../../components/Content/Text.style';

export const Slider = styled.div`
  ${tw`h-auto w-full mt-[-113px] x:(flex justify-center flex-col)`}
`;

export const SliderWrapper = styled.div`
  ${tw`items-center w-screen m-auto pt-[194px] h-full bg-no-repeat`}
  background-image: url(${Images.sliderBG});
`;

export const SliderContainer = styled.div`
  ${tw`flex mt-[75px] items-center 2xl:justify-center sm:(flex-col h-auto) xl:(flex-row h-full) `}
`;

export const SliderWrapperText = styled.div`
  ${tw`flex justify-center items-center flex-col h-full sm:w-auto md:w-[700px]`}
`;

export const SliderMainChild = styled.div`
  ${tw`pl-[189px] pb-[27px] max-[1280px]:(pl-[70px])`}
`;

export const SliderMainTitle = styled(Title)`
  ${tw`text-48 leading-[60px] w-[430px] h-[128px]`}
`;

export const SliderMainDescribe = styled(Describe)`
  ${tw`font-medium w-[474px] h-[54px] text-color-title`}
`;

export const SliderButton = styled.div`
  ${tw`pt-[27px]`}
`;

export const Button = styled(ButtonComponent)`
  ${tw`w-[200px] h-[58.36px]`}
`;

export const SliderWrapperImage = styled.div`
  ${tw`xl:(w-[60%] pb-[7px] pr-[132px]) sm:(flex justify-center) 2xl:(w-[45%] pr-0)`}
`;

export const SliderImage = styled.img`
  ${tw`w-auto h-auto`}
`;

export const SliderButtonGroup = styled.div`
  ${tw`flex justify-center mt-[128px]`}
`;

export const SliderBtn = styled(ButtonComponent)`
  ${tw`w-[14.82px] h-[3.09px] bg-slider-btn rounded-[50px]`}
`;
export const SliderBtnActive = styled(ButtonComponent)`
  ${tw`w-[25.31px] h-[8.15px] bg-slider-btn-active rounded-[50px] mx-[9px]`}
`;
