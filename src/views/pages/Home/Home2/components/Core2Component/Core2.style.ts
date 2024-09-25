import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../../../../../../components/Card/Card.style';

export const Core = styled.div`
  ${tw`h-full w-full mt-[158px]`}
`;

export const CoreWrapper = styled.div`
  ${tw`h-auto w-auto`}
`;

export const CoreWrapperText = styled.div`
  ${tw`h-auto w-full flex flex-col items-center text-center`}
`;

export const CoreTip = styled.p`
  ${tw`w-[113px] h-[20px] font-semibold text-16 leading-20 text-color-pink`}
`;

export const CoreTitle = styled.h1`
  ${tw`w-[732px] h-[53px] font-semibold text-36 leading-45 text-color-title mt-[12px]`}
`;

export const CoreDescribe = styled.p`
  ${tw`w-[848px] h-[33px] font-normal text-16 leading-24 tracking-widest text-color-default mt-[12px]`}
`;

export const CoreWrapperCard = styled.div`
  ${tw`h-auto w-auto`}
`;

export const CoreItem = styled.div`
  ${tw`flex justify-center`}
`;

export const CoreItemCard = styled(Card)`
  ${tw`w-[261px] h-[303px]`}
  border: 1px solid rgba(226, 226, 226, 1);
  background-color: transparent;
  box-shadow: none !important;
`;

export const CoreLearnMore = styled.a`
  ${tw``}
`;

export const IconLearMore = styled(FontAwesomeIcon)`
  ${tw``}
`;
