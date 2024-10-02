import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Client = styled.div`
  ${tw`h-full w-full mt-[112px] md:mb-[-387px] xl:mb-[122px]`}
`;

export const ClientWrapper = styled.div`
  ${tw`h-auto w-auto`}
`;

export const ClientWrapperText = styled.div`
  ${tw`h-auto w-full flex flex-col items-center text-center pt-[12px]`}
  ${tw`sm:pr-0 x:pr-[26px]`}
`;

export const TipText = styled(Tip)`
  ${tw`w-[70px] h-[20px] sm:w-auto`}
`;

export const TitleText = styled(Title)`
  ${tw`w-[551px] h-[50px] mt-[11px] sm:w-auto`}
`;

export const DescribeText = styled(Describe)`
  ${tw`w-[848px] h-[34px] mt-[15px] sm:w-auto`}
`;

export const ClientWrapperIcon = styled.div`
  ${tw`flex mt-[93px]`}
  ${tw`sm:(ml-0 flex-wrap w-auto justify-center gap-[21px]) x:(w-[962px] justify-between ml-[237px]) 2xl:(justify-center w-auto ml-0)`}
`;

export const ClientIcon = styled.img`
  ${tw``}
`;
