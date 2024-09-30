import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardImage, CardName, CardWrapper } from '../../../../../../components/Card/Card.style';
import { Describe, LearnMore, Tip, Title } from '../../../../../../components/Content/Text.style';

export const Core = styled.div`
  ${tw`h-full w-full mt-[158px]`}
`;

export const CoreWrapper = styled.div`
  ${tw`h-auto w-auto`}
`;

export const CoreWrapperText = styled.div`
  ${tw`h-auto w-full flex flex-col items-center text-center`}
`;

export const CoreTip = styled(Tip)`
  ${tw`w-[113px] h-[20px]`}
`;

export const CoreTitle = styled(Title)`
  ${tw`w-[732px] h-[53px] mt-[12px]`}
`;

export const CoreDescribe = styled(Describe)`
  ${tw`w-[848px] h-[33px] mt-[12px]`}
`;

export const CoreWrapperCard = styled.div`
  ${tw`h-auto w-auto flex justify-center`}
`;

export const CoreItem = styled.div`
  ${tw`flex justify-between w-[916px]`}
`;

export const CoreItemCard = styled(Card)`
  ${tw`w-[261px] h-[303px] mt-[67px] rounded-[25px]`}
  border: 1px solid rgba(226, 226, 226, 1);
  background-color: transparent;
  box-shadow: none !important;
`;

export const Card2Wrapper = styled(CardWrapper) `
  ${tw`pl-[86px] h-auto`}
`;

export const Card2Image = styled(CardImage) `
  ${tw`flex justify-start mt-0 pt-0`}
`;

export const Card2Name = styled(CardName) `
  ${tw`text-start`}
`; 

export const CoreLearnMore = styled(LearnMore)`
  ${tw`flex justify-start`}
`;

export const IconLearMore = styled(FontAwesomeIcon)`
  ${tw`font-semibold`}
`;
