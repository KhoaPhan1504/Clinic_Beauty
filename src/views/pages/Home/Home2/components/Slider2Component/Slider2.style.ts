import tw from "twin.macro";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/Button/ButtonComponent";
import { Images } from "../../../../../../data/ComponentData/Images";

export const Slider = styled.div `
  ${tw`h-full w-full mt-[-113px] m-auto bg-no-repeat 2xl:bg-cover`}
  background-image: url(${Images.slider2BG});
`;

export const SliderWrapper = styled.div `
  ${tw`flex h-[918px] md:(flex-col pt-[200px]) xl:(flex-row pt-[308px]) 2xl:(h-[1270px] justify-center pt-[500px])`}
`;

export const SliderWrapperText = styled.div `
  ${tw`md:(flex pl-0 justify-center) xl:(pl-[150px]) 2xl:(pl-0)`} 
`;

export const SliderMainText = styled.div `
  ${tw`md:(flex flex-col text-center items-center) xl:(text-left items-start)`}
`;

export const SliderTitle = styled.h1 `
  ${tw`w-[502px] h-[133px] font-semibold text-48 leading-60 text-color-white`}
  ${tw`2xl:(w-[600px] h-[159px] font-semibold text-50)`}
`;

export const SliderDescribe = styled.p `
  ${tw`w-[501px] h-[78px] font-medium text-16 leading-24 tracking-widest text-color-describe-2`}
  ${tw`2xl:(w-[600px] h-[94px] font-semibold text-18 leading-27)`}
`;

export const SliderButton = styled(ButtonComponent) `
  ${tw`w-[179px] h-[52px] font-semibold text-16 leading-24 tracking-widest text-color-rgb-white rounded-[15px] mt-[34px]`}
  border: 1px solid rgba(255, 255, 255, 1) !important;
  background-color: transparent !important;
`;

export const SliderWrapperButton = styled.div `
  ${tw`flex h-auto w-auto items-center justify-center`}
  ${tw`md:(ml-0 mb-0 mt-[80px]) xl:(ml-[200px] mb-[300px] mt-0) x:mb-[315px] 2xl:mb-[560px]`}
`;

export const SliderButtonImage = styled.img `
  ${tw`h-auto w-auto`}
`;

export const SliderButtonText = styled.p `
  ${tw`h-[24px] font-semibold text-16 leading-24 tracking-widest text-color-describe-2 ml-[26px]`}
`;