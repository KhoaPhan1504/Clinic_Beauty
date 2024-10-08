import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Section = styled.section`
  ${tw`mt-[81px] pb-[55px] flex justify-center mb-[71px]`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col items-center text-center`}
`;

export const TipText = styled(Tip)`
  ${tw``}
`;

export const TitleText = styled(Title)`
  ${tw`mt-[12px] min-h-[57px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`mt-[12px] sm:px-[10px] x:px-0`}
`;

export const InfoCardsContainer = styled.div`
  ${tw`mt-[94px] flex flex-wrap justify-center sm:gap-[60px] xl:gap-0 x:gap-[1]`}
`;

export const InfoCard = styled.div<{ isActive: boolean }>`
  ${tw`flex flex-col items-center text-center transition-all duration-700 ease-in-out cursor-pointer relative rounded-[42px] pt-[79.5px]`}
  ${tw`h-[40px] sm:h-[402px] w-full sm:w-[424px] xl:w-[420px] hover:shadow-[0px_25px_50px_25px_#F6F7FF]`}
  ${({ isActive }) =>
    isActive
      ? tw`bg-color-white shadow-[0px_25px_50px_25px_rgba(246, 247, 255, 1)] z-10`
      : tw`bg-transparent shadow-none`}

  &:hover {
    ${tw`bg-color-white shadow-[0px_25px_50px_25px_rgba(246, 247, 255, 1)]`}
  }

  &:not(.active) {
    ${tw`sm:(bg-color-white shadow-[0px_25px_50px_25px_rgba(246, 247, 255, 1)]) xl:(bg-transparent shadow-none)`}/* background-color: transparent !important; */
    /* box-shadow: none !important; */
  }

  &[data-id='1'] {
    ${tw`sm:pl-0 xl:pl-[72px]`}
    &:hover {
      ${tw`pl-0`}
    }
  }

  &[data-id='3'] {
    ${tw`sm:pr-0 xl:pr-[72px]`}
    &:hover {
      ${tw`pr-0`}
    }
  }
`;

export const IconWrapper = styled.div`
  ${tw`h-[65px] w-[65px] shrink-0`}
`;

export const Subtitle = styled.h4`
  ${tw`mt-[15px] text-24 font-semibold leading-[30px]`}
`;

export const Description = styled.p`
  ${tw`mt-[13px] max-w-[270px] text-14 leading-21 tracking-widest text-color-default`}
`;
