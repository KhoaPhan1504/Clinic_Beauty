import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Title,
} from '../../../../../../components/Content/Text.style';
import { Images } from '../../../../../../data/ComponentData/Images';

export const WhyChoose = styled.div`
  ${tw`w-full h-[697.5px] bg-no-repeat mt-[128px] 2xl:(bg-cover min-h-[961px])`}
  background-image: url(${Images.whyChoose});
`;

export const WhyChooseWrapper = styled.div`
  ${tw`flex w-full h-full sm:flex-col xl:flex-row`}
`;

export const WrapperContent = styled.div`
  ${tw`h-full w-2/4 flex flex-col justify-center pt-[30px] pl-[154px]`}
`;

export const ContentTitle = styled(Title)`
  ${tw`w-auto text-color-white`}
`;

export const ContentDescribe = styled(Describe)`
  ${tw`w-[486px] h-[80px]  text-color-white mt-[21px]`}
`;

export const WrapperIcon = styled.div`
  ${tw`h-auto w-full`}
`;

export const WrapperContainer = styled.div`
  ${tw`h-auto w-[483px] flex flex-wrap justify-between mt-[278px] ml-[139px] gap-y-[43px]`}
`;

export const GroupIcon = styled.div`
  ${tw`flex w-[197px] h-[69px]`}
`;

export const ImageIcon = styled.img`
  ${tw`h-auto w-auto`}
`;

export const ContentIcon = styled.div`
  ${tw`ml-[11px]`}
`;

export const CountIcon = styled(Title)`
  ${tw`text-color-white`}
`;

export const DescribeIcon = styled(Describe)`
  ${tw`text-color-white leading-20 font-semibold tracking-normal`}
`;
