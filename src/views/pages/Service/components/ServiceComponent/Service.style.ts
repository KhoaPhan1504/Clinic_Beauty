import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Service = styled.div`
  ${tw`h-full w-full mt-[125px]`}
`;

export const ServiceBG = styled.img`
  ${tw`absolute -z-10 -translate-y-[32px]`}
`;

export const ServiceWrapper = styled.div`
  ${tw`h-auto w-auto`}
`;

export const ServiceWrapperText = styled.div`
  ${tw`h-auto w-full flex flex-col items-center text-center`}
  ${tw``}
`;

export const TipText = styled(Tip)`
  ${tw`w-[70px] h-[20px] sm:w-auto`}
`;

export const TitleText = styled(Title)`
  ${tw`w-[551px] h-[50px] mt-[11px] sm:w-auto`}
`;

export const DescribeText = styled(Describe)`
  ${tw`w-[848px] h-[34px] mt-[20px] sm:w-auto`}
`;

export const ServiceWrapperImage = styled.div`
  ${tw`w-auto h-full mt-[62px] 2xl:(w-full flex justify-center)`}
`;

export const ServiceWrapperImg = styled.div`
  ${tw`flex flex-wrap justify-center gap-x-[83px] gap-y-[68px]`}
  ${tw`sm:px-[10px] 2xl:(w-[1140px] px-0)`}
`;

export const ServiceImage = styled.img`
  ${tw`sm:w-auto`}
`;
