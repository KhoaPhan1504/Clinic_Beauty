import tw from "twin.macro";
import styled from "styled-components";

export const Card = styled.div `
  ${tw`flex justify-center items-center flex-col mt-[74px] bg-color-white rounded-[42px] cursor-pointer transition-all`}
  box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);
`;

export const CardWrapper = styled.div `
  ${tw`flex justify-center items-center md:flex-wrap`}

`;

export const CardItem = styled.div `
  ${tw`flex flex-col items-center mt-[3px] h-full`}
`;

export const CardImage = styled.div `
  ${tw`w-full pt-[57px] flex justify-center mb-[6px]`}
`;

export const CardImg = styled.img `
  ${tw`h-full rounded-full`}
`;

export const CardInfo = styled.div `
  ${tw`flex flex-col items-center mt-[47px] text-center`}
`;

export const CardTitle = styled.span `
  ${tw`w-[117px] h-[20px] leading-20 text-center text-color-pink`}
`;

export const CardName = styled.h3 `
  ${tw`w-[263px] h-[37px] mt-[3px] mb-[4px] font-semibold text-18 text-center text-color-title`}
`;

export const CardDescribe = styled.p `
  ${tw`font-normal text-14 tracking-1.4 w-[274px] h-[80px] leading-21 mt-[4px]`}
`;