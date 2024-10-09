import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Title,
} from '../../../../../../components/Content/Text.style';
import Container from '../../../../../../components/Container/Container';

export const Stats = styled.section`
  ${tw`relative mt-[128px]`}
`;

export const BackgroundImage = styled.img`
  ${tw`max-[476px]:h-[860px] max-[483px]:h-[700px] h-[600px] sm:h-auto w-full object-cover sm:min-h-[600px] lg:min-h-fit`}
`;

export const ContentContainer = styled(Container)`
  ${tw`absolute left-1/2 top-[120px] flex -translate-x-1/2 flex-col items-center gap-5 lg:top-[160px] lg:flex-row lg:justify-between xl:top-[268px] xl:(gap-[97px] px-[130px])`}
`;

export const TextContainer = styled.div`
  ${tw`ml-1 flex shrink-0 flex-col`}
`;

export const CardsContainer = styled.div`
  ${tw`flex h-[181px] flex-wrap items-center justify-center gap-[43px] gap-y-[43px] pt-[3px] lg:gap-x-[72px]`}
`;

export const TitleText = styled(Title)`
  ${tw`mt-px min-h-[53px] text-color-white`}
`;

export const DescribeText = styled(Describe)`
  ${tw`mt-[11.5px] max-w-[486px] text-color-white`}
`;
