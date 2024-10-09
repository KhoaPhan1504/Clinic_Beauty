import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  LearnMore,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';
import {
  Card,
  CardDescribe,
  CardImage,
  CardImg,
  CardInfo,
  CardItem,
  CardName,
  CardWrapper,
} from '../../../../../../components/Card/Card.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Blog = styled.div`
  ${tw`h-full w-full mt-[111px]`}
`;

export const BlogWrapper = styled.div`
  ${tw`h-auto w-auto`}
`;

export const BlogWrapperText = styled.div`
  ${tw`h-auto w-full flex flex-col items-center text-center`}
`;

export const BlogTip = styled(Tip)`
  ${tw`w-[70px] h-[20px] sm:w-auto`}
`;

export const BlogTitle = styled(Title)`
  ${tw`w-[551px] h-[50px] mt-[11px] sm:w-auto`}
`;

export const BlogDescribe = styled(Describe)`
  ${tw`w-[848px] h-[34px] mt-[13px] sm:w-auto`}
`;

export const BlogWrapperCard = styled.div`
  ${tw`h-auto w-auto flex justify-center mt-[75px]`}
`;

export const BlogItem = styled.div`
  ${tw`flex w-[1139px] sm:(flex-wrap justify-center gap-y-[40px]) xl:justify-between`}
`;

export const BlogItemCard = styled(Card)`
  ${tw`w-[347px] h-[543px] mt-0 rounded-[25px] justify-start bg-color-white`}
`;

export const BlogWrapperItem = styled(CardWrapper)`
  ${tw`h-auto`}
`;

export const BlogItemChild = styled(CardItem)`
  ${tw`items-start`}
`;

export const CardBlogImage = styled(CardImage)`
  ${tw`w-auto flex justify-start pt-0`}
`;

export const CardBlogImg = styled(CardImg)`
  ${tw`rounded-none`}
`;

export const BlogInfo = styled(CardInfo)`
  ${tw`w-auto items-start text-start ml-[39px] mt-[46px]`}
`;

export const BlogName = styled(CardName)`
  ${tw`text-start w-[288px] h-[58px] leading-22.5`}
`;

export const BlogDescribeCard = styled(CardDescribe)`
  ${tw`w-[271px] h-[74px] mt-[-4px]`}
`;

export const BlogLearnMore = styled(LearnMore)`
  ${tw`flex justify-start ml-[39px] mt-[15px]`}
`;

export const IconLearMore = styled(FontAwesomeIcon)`
  ${tw`font-semibold ml-[9px] mt-[2px]`}
`;
