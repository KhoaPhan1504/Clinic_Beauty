import styled from 'styled-components';
import tw from 'twin.macro';
import { Images } from '../../../../data/ComponentData/Images';
import Container from '@mui/material/Container';

export const Footer = styled.div`
  ${tw`w-full h-[705.34px] overflow-hidden bg-cover mt-[11px]`}
`;

export const FooterWrapper = styled.div`
  ${tw`relative flex m-0 bg-no-repeat h-[704.37px] bg-cover z-0`}
  background-image: url(${Images.footer2Background});

  &::after {
    ${tw`absolute -z-1 w-full h-[125px] bg-color-bgr-footer bottom-0`}
    content: '';
  }
`;

export const FooterContainerFluid = styled.div`
  ${tw`w-full h-[704.37px] bg-no-repeat bg-cover`}
  background-image: url(${Images.footer1Background});
`;

export const FooterContainer = styled(Container)`
  max-width: 1188px !important;
  ${tw`flex flex-col justify-center m-auto mt-[10px] h-auto sm:mt-[225px]`}
`;

export const FooterColumn = styled.div`
  ${tw`flex flex-col xl:flex-row`}
`;

export const FooterCol = styled.div`
  ${tw`flex items-start mb-[50px] w-full`}
`;

export const FooterInfo = styled.div`
  ${tw`mt-[15px] w-full`}
`;

export const FooterInfoLogo = styled.div`
  ${tw`w-full flex justify-center sm:justify-start`}
`;

export const FooterLogoImg = styled.img`
  ${tw``}
`;

export const FooterInfoDescibes = styled.div`
  ${tw`mt-[33px] text-center sm:(ml-[31px] text-left) text-color-border text-16 tracking-widest`}
`;

export const FooterInfoDescibeWrap = styled.p`
  ${tw`leading-24 tracking-widest w-auto h-[21px] text-16 font-normal sm:w-[461px]`}
`;

export const FooterInfoDescibe = styled.strong`
  ${tw`leading-24 tracking-widest w-auto h-[21px] text-16 font-bold sm:w-[461px]`}
`;

export const FooterInfoAddress = styled.div`
  ${tw`italic leading-21 tracking-1.4 text-footer-text mt-[22px] w-[287px] h-[24px] sm:mt-[2px] ml-[1px] text-14 font-medium`}
`;

export const FooterInfoContact = styled.div`
  ${tw`mt-[18px] flex  sm:mt-[-2px]`}
`;

export const FooterInfoPhone = styled.span`
  ${tw`w-[140px] h-[23px] italic leading-21 tracking-1.4 no-underline text-footer-text cursor-pointer font-medium text-14`}
`;

export const FooterInfoEmail = styled.span`
  ${tw``}
`;

export const FooterInfoEmailItem = styled.a`
  ${tw`w-[190px] h-[23px] italic leading-21 ml-[42px] tracking-1.4 text-footer-text cursor-pointer font-medium text-14 underline`}
`;

export const FooterMore = styled.div`
  ${tw`flex justify-around w-[730px] text-color-border tracking-widest leading-27 md:pl-0 xl:pl-[120px] x:pl-[129px]`}
`;

export const FooterMorePage = styled.div`
  ${tw`w-2/4`}
`;

export const FooterMoreInformation = styled.div`
  ${tw`ml-[7px] w-2/4`}
`;

export const FooterMoreTitle = styled.p`
  ${tw`font-semibold text-18`}
`;

export const FooterMoreChildrenItems = styled.ul`
  ${tw`mt-[27px]`}
`;

export const FooterMoreItem = styled.li`
  ${tw`flex items-center text-16 my-[11px] transition-[0.5s] cursor-pointer leading-24 tracking-widest font-normal`}
`;

export const IconLinkMenu = styled.img`
  ${tw`mr-[7px] w-auto h-full`}
`;

export const FooterBottom = styled.div`
  ${tw`mt-[80px] flex sm:(mt-0 flex-col justify-center items-center) md:(justify-start items-start) lg:flex-row xl:mt-[90px] x:mt-[80px]`}
`;

export const FooterInternet = styled.div`
  ${tw`w-[305px] h-[27.84px] flex sm:justify-center`}
`;

export const FooterGroupIcon = styled.div`
  ${tw`w-full flex justify-between`}
`;

export const FooterIcon = styled.span`
  ${tw`cursor-pointer`}
`;

export const IconImg = styled.img`
  ${tw`transition-[0.5s]`}

  &:hover {
    ${tw`translate-y-[-3px] scale-110`}
  }
`;

export const FooterCertification = styled.p`
  ${tw`w-[497px] h-[31.18px] text-color-border tracking-widest text-right leading-24 font-normal text-16`}
  ${tw`md:ml-0 xl:ml-[210px] x:ml-[340px]`}
`;
