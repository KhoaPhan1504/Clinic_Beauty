import tw from "twin.macro";
import styled from "styled-components";
import { Card } from "../../../../../../components/Card/Card.style";

export const Profession = styled.div `
  ${tw`h-[861px] md:(w-auto ml-0 mt-[150px]) lg:md:(w-auto mt-[150px]) xl:(w-full ml-[3px] mt-[300px]) x:mt-[144px] 2xl:(ml-0 flex justify-center)`}
`;

export const ProfessionWrapper = styled.div `
  ${tw`flex items-center flex-col max-w-1140 h-full md:ml-0 xl:ml-[68px] x:ml-[147px] 2xl:(ml-0)`}
`;

export const ProfessionDesc = styled.div `
  ${tw`flex justify-center items-center flex-col max-w-[848px] h-[148px] px-[20px] py-[1px]`}
`;

export const ProInfoTip = styled.span `
  ${tw`text-color-pink leading-20 w-[160px] h-[20px] pt-[3px] font-semibold text-16`}
`;

export const ProInfoTitle = styled.h2 `
  ${tw`h-[53px] my-[15px] text-center leading-45 text-color-title font-semibold text-36`}
  ${tw`md:(w-auto) xl:w-[732px]`}
`;

export const ProInfoDescribe = styled.p `
  ${tw`h-[51px] text-center text-color-default tracking-widest leading-24 mt-[2px] font-normal text-16`}
  ${tw`md:(w-auto) xl:w-[848px]`}
`;

export const ProItem = styled.div `
  ${tw`flex justify-center items-center w-full mt-[89px]`}
`;

export const ProItemWrapper = styled.div `
  ${tw`flex gap-1 transition-all md:(flex-wrap flex-col) lg:(flex-wrap flex-col justify-center) xl:(flex-nowrap flex-row justify-between)`}
  perspective: 1000px;
`;

export const ProItemRow = styled.div `
  ${tw`flex-1 transition-all bg-transparent relative rounded-[42px]`}
  transform-style: preserve-3d;
  transition: transform 0.3s, box-shadow 0.3;

  &.active {
      ${tw`bg-color-white`}
      transform: translateZ(20px);
      box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);
      z-index: 10;
    } 

  &:not(.active) {
    ${tw`xl:bg-transparent shadow-none`}
  }

  /* @media (min-width: 768px) {
    &.active,
    &:not(.active) {
      ${tw`bg-color-white`}
      box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);
    }
  } */
`;

export const CardProfessional = styled(Card) `
  ${tw`md:(w-[500px] h-[570px]) xl:(w-[424px] h-[626px]) x:mt-0 `}
  border-radius: 42px;
  box-shadow: none;
  transition: all 0.3s;
`;

export const CardWrapperPro = styled.div `
  ${tw`flex flex-col items-center h-full`}
  
  &[data-id="1"] {
    ${tw`md:pl-0 x:pl-[40px]`}
  }

  &[data-id="3"] {
    ${tw`md:pr-0 x:pr-[41px]`}
  }
`;

export const CardImagePro = styled.div `
  ${tw`w-[146px] h-[146px] mt-[93px]`}
`;

export const CardImgPro = styled.img `
  ${tw``}
`;

export const CardInfoPro = styled.div `
  ${tw`flex flex-col items-center mt-[54px]`}
`;

export const CardInfoTitle = styled.span `
  ${tw`w-[117px] h-[20px] leading-20 text-center text-color-pink font-semibold text-16`}
`;

export const CardInfoName = styled.h3 `
  ${tw`w-[263px] h-[37px] leading-22.5 text-center text-color-title mt-[14px] font-semibold text-18`}
`;

export const CardInfoDescribe = styled.p `
  ${tw`w-[270px] h-[63px] leading-21 tracking-1.4 text-center text-color-default mt-[6px] font-normal text-14`}
`;

export const CardContactPro = styled.div `
  ${tw`mt-[51px] mr-[1px] flex`}
`;

export const CardContactItem = styled.a `
  ${tw`w-[49px] h-[49px] rounded-[50%] mx-[17px]`}
`;

export const CardContactImg = styled.img `
  ${tw`rounded-[50%] w-[49px] h-[49px] scale-[1.5]`}
`;