import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardDescribe, CardImage, CardInfo, CardItem, CardName, CardWrapper } from '../../../../../../components/Card/Card.style';
import { Describe, LearnMore, Tip, Title } from '../../../../../../components/Content/Text.style';

export const Core = styled.div`
  ${tw`relative h-full w-full mt-[158px]`}
`;

export const CoreBackground = styled.img`
  ${tw`absolute top-[333px]`}
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
  ${tw`w-[732px] h-[53px] mt-[12px] sm:(w-auto)`}
`;

export const CoreDescribe = styled(Describe)`
  ${tw`sm:(w-auto) x:(w-[848px]) h-[33px] mt-[12px]`}
`;

export const CoreWrapperCard = styled.div`
  ${tw`h-auto w-auto flex justify-center mt-[67px]`}
`;

export const CoreItem = styled.div`
  ${tw`flex sm:(w-auto flex-wrap justify-center gap-8) xl:(justify-between w-[916px])`}
`;

export const CoreItemCard = styled(Card)`
  ${tw`w-[261px] h-[303px] mt-0 rounded-[25px] justify-start pt-[30px]`}
  border: 1px solid rgba(226, 226, 226, 1);
  background-color: transparent;
  box-shadow: none !important;
`;

export const Card2Wrapper = styled(CardWrapper) `
  ${tw`h-auto`}
`;

export const Card2Item = styled(CardItem) `
  ${tw`items-start mt-0`}
`;

export const Card2Image = styled(CardImage) `
  ${tw`w-auto flex justify-start mt-0 pt-0`}
`;

export const Card2Info = styled(CardInfo) `
  ${tw`w-auto mt-0 pt-[14px] items-start text-start`}
`;

export const Card2Name = styled(CardName) `
  ${tw`text-start w-auto`}
`; 

export const Card2Describe = styled(CardDescribe) `
  ${tw`mt-0 w-[189px] h-[63px] mt-[-1px]`}
`; 

export const CoreLearnMore = styled(LearnMore)`
  ${tw`flex justify-start mt-[16px]`}
`;

export const IconLearMore = styled(FontAwesomeIcon)`
  ${tw`font-semibold ml-[10px] mt-[3px]`}
`;
