import tw from "twin.macro";
import styled from "styled-components";
import ButtonComponent from "../../../../components/Button/ButtonComponent";

export const About = styled.div `
  ${tw`w-screen h-auto bg-transparent`}
`;

export const AboutBackground = styled.img `
  ${tw`absolute right-0 translate-y-[-220px]`}
  content: '';
`;

export const AboutWrapper = styled.div `
  ${tw`relative flex items-center max-w-[1440px] m-auto pt-[134px]`}
`;

export const AboutContainer = styled.div `
  ${tw`flex w-full h-auto`}
`;

export const AboutContainerText = styled.div `
  ${tw`w-[51.5%] mt-[1px]`}
`;

export const AboutTitleDesc = styled.div `
  ${tw`w-[664px] h-[292px] flex flex-col items-start ml-[150px]`}
`;

export const AboutTip = styled.span `
  ${tw`font-semibold text-16 w-[73px] h-[20px] leading-20 text-color-pink`}
`;

export const AboutTitle = styled.h2 `
  ${tw`font-semibold text-36 max-w-[664px] h-[52px] leading-45 text-color-title mt-[12px]`}
`;

export const AboutDescribe = styled.p `
  ${tw`font-normal text-16 w-[483px] h-[196px] leading-24 tracking-widest text-color-default mt-[19px]`}
`;

export const AboutBtnGroup = styled.div `
  ${tw`mt-[52px] flex`}
`;

export const AboutBtnLeft = styled.div `
  
`;

export const BtnLearnMore = styled(ButtonComponent) `
  ${tw`w-[200px] h-[58.36px] py-3 pr-[1px] pl-[4px]`}
`;

export const AboutBtnRight = styled.div `
  ${tw`flex justify-center items-center h-full ml-[44px]`}
`;

export const AboutWatch = styled.button `
  ${tw`flex justify-between items-center w-full bg-transparent border-none p-0 cursor-pointer transition-all`}

  &:active {
    ${tw`translate-y-[10px]`}
  }
`;

export const AboutWatchImg = styled.img `

`;

export const AboutWatchText = styled.span `
  ${tw`ml-[13px] leading-24 tracking-widest font-semibold text-16`}
`;

export const AboutContainerImage = styled.div `
  ${tw`w-full h-full pt-[44px] pl-[72px] rounded-[50px]`}
`;

export const AboutImg = styled.img `

`;


