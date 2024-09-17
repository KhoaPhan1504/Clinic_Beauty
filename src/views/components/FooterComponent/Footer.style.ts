import styled from "styled-components";
import tw from "twin.macro";

export const Footer = styled.div `
  ${tw`w-full h-[705.34px] translate-y-[11px] overflow-hidden`}
`;

export const FooterWrapper = styled.div `
  ${tw`relative flex max-w-[1540px] m-0 bg-footer-2-background bg-no-repeat h-[704.37px] bg-cover z-0`}

  &::after {
    ${tw`absolute -z-1 w-full h-[125px] bg-color-bgr-footer bottom-0`}
    content: '';
  }
`;

export const FooterContainerFluid = styled.div `
  ${tw`w-full h-[704.37px] bg-footer-1-background bg-no-repeat bg-cover`}
`;

export const FooterContainer = styled.div `
  ${tw`w-full mt-[226px] pl-[150px]`}
`;

export const FooterColumn = styled.div `
  ${tw`flex-col`}
`;

export const FooterCol = styled.div `
  ${tw`flex items-start mb-[50px]`}
`;

export const FooterInfo = styled.div `
  ${tw`mt-[15px]`}
`;

export const FooterInfoLogo = styled.div `
  ${tw``}
`;

export const FooterLogoImg= styled.img `
  ${tw``}
`;

export const FooterInfoDescibes = styled.div `
  ${tw`mt-[33px] ml-[31px] text-color-border text-16 tracking-widest`}
`;

export const FooterInfoDescibe = styled.p `
  ${tw`leading-24 tracking-widest w-[461px] h-[21px] text-16 font-bold`}
`;

export const FooterInfoAddress = styled.div `
  ${tw`italic leading-21 tracking-1.4 text-footer-text w-[287px] h-[24px] mt-[2px] ml-[1px] text-14 font-medium`}
`;

export const FooterInfoContact = styled.div `
  ${tw`mt-[-1px]`}
`;

export const FooterInfoPhone = styled.span `
  ${tw`w-[140px] h-[23px] italic leading-21 tracking-1.4 no-underline text-footer-text cursor-pointer font-medium text-14`}
`;

export const FooterInfoEmail = styled.span `
  ${tw``}
`;

export const FooterInfoEmailItem = styled.a `
  ${tw`w-[190px] h-[23px] italic leading-21 ml-[42px] tracking-1.4 no-underline text-footer-text cursor-pointer font-medium text-14`}
`;

export const FooterMore = styled.div `
  ${tw`flex justify-around w-[730px] text-color-border tracking-widest leading-27 pl-[130px]`}
`;

export const FooterMorePage  = styled.div `
  ${tw`w-2/4`}
`;

export const FooterMoreInformation = styled.div `
  ${tw`ml-[7px] w-2/4`}
`;

export const FooterMoreTitle = styled.p `
  ${tw`font-semibold text-18`}
`;

export const FooterMoreChildrenItems = styled.ul `
  ${tw`mt-[27px]`}
`;

export const FooterMoreItem = styled.li `
  ${tw`text-16 my-[11px] transition-[0.5s] cursor-pointer leading-24 tracking-widest font-normal`}
`;

export const FooterBottom = styled.div `
  ${tw`mt-[80px] flex`}
`;

export const FooterInternet = styled.div `
  ${tw`w-[305px] h-[27.84px] flex`}
`;
 
export const FooterGroupIcon = styled.div `
  ${tw`w-full flex justify-between`}
`;

export const FooterIcon = styled.span `
  ${tw`cursor-pointer`}
`;

export const IconImg = styled.img `
  ${tw`transition-[0.5s]`}

  &:hover {
    ${tw`translate-y-[-3px] scale-110`}
  }
`;

export const FooterCertification = styled.p `
  ${tw`w-[497px] h-[31.18px] text-color-border tracking-widest text-right leading-24 ml-[340px] font-normal text-16`}
`;