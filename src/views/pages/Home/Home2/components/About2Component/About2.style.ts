import tw from "twin.macro";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/Button/ButtonComponent";

export const About = styled.div `
  ${tw`h-auto w-auto`}
`;

export const AboutWrapper = styled.div `
  ${tw`h-full w-full flex md:(flex-col pt-[50px]) xl:(flex-row pt-[158px]) 2xl:justify-center`}
`;

export const AboutWrapperImage = styled.div `
  ${tw`md:(pl-0 flex justify-center) xl:(pl-[30px] w-full justify-start) x:(pl-[150px] h-full w-auto)`}
`;

export const AboutImage = styled.img `
  ${tw``}
`;

export const AboutWrapperText = styled.div `
  ${tw`md:(pt-[70px] pl-0 flex flex-col items-center) x:(pl-[168px] pt-0 items-start)`}
`;

export const AboutTip = styled.p `
  ${tw`w-[73px] h-[20px] font-semibold text-16 leading-20 text-color-pink`}
`;

export const AboutTitle = styled.h1 `
  ${tw`w-[460px] h-[91px] font-semibold text-36 leading-45 text-color-title mt-[12px]`}
  ${tw`md:text-center x:text-left`}
`;

export const AboutDescribe = styled.p `
  ${tw`w-[483px] h-[133px] font-normal text-16 leading-24 tracking-widest text-color-default mt-[10px]`}
  ${tw`md:text-center x:text-left`}
`;

export const AboutButton = styled(ButtonComponent) `
  ${tw`w-[200px] h-[58.36px] rounded-[50px] mt-[35px]`}
`;
