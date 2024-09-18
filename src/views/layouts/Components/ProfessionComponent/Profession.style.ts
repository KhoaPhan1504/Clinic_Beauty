import tw from "twin.macro";
import styled from "styled-components";
import { Card } from "../../../../components/Card/Card.style";

export const Profession = styled.div `
  ${tw`w-full h-[861px] ml-[3px] mt-[144px]`}
`;

export const ProfessionWrapper = styled.div `
  ${tw`flex items-center flex-col max-w-1140 h-full ml-[147px]`}
`;

export const ProfessionDesc = styled.div `
  ${tw`flex justify-center items-center flex-col max-w-[848px] h-[148px] px-[20px] py-[1px]`}
`;

export const ProInfoTip = styled.span `
  ${tw`text-color-pink leading-20 w-[160px] h-[20px] pt-[3px] font-semibold text-16`}
`;

export const ProInfoTitle = styled.h2 `
  ${tw`w-[732px] h-[53px] my-[15px] text-center leading-45 text-color-title font-semibold text-36`}
`;

export const ProInfoDescribe = styled.p `
  ${tw`w-[848px] h-[51px] text-center text-color-default tracking-widest leading-24 mt-[2px] font-normal text-16`}
`;

export const ProItem = styled.div `
  ${tw`flex justify-center items-center w-full mt-[15px]`}
`;

export const ProItemWrapper = styled.div `
  ${tw`flex justify-between transition-all`}
`;

export const ProItemRow = styled.div `
  ${tw`flex-1 min-h-[400px] transition-all bg-transparent`}

  &.active {
    ${tw`opacity-35`}
  }

  &:not(.active) {
    ${tw``}
  }
`;

export const CardProfessional = styled(Card) `
  ${tw`w-[424px] h-[626px]`}
`;

export const CardWrapperPro = styled.div `
  ${tw`flex flex-col items-center h-full`}
  
  &[data-id="1"] {
    ${tw`pl-[34px]`}
  }

  &[data-id="3"] {
    ${tw`pr-[34px]`}
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
  ${tw`mt-[56px] mr-[4px] flex`}
`;

export const CardContactItem = styled.a `
  ${tw`w-[49px] h-[49px] rounded-[50%] mx-[17px]`}
`;

export const CardContactImg = styled.img `
  ${tw`rounded-[50%] w-[49px] h-[49px] scale-[1.5]`}
`;