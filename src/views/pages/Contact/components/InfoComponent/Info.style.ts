import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Section = styled.section`
  ${tw`mt-[113px] pb-[55px] flex justify-center mb-[71px]`}
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
  ${tw`mt-[12px]`}
`;

export const InfoCardsContainer = styled.div`
  ${tw`mt-[94px] flex flex-wrap justify-center gap-[1]`}
  transform-style: preserve-3d;
  transition:
    transform 0.3s,
    box-shadow 0.3;

  &.active {
    ${tw`bg-color-white`}
    box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);
    z-index: 10;
  }

  &:not(.active) {
    ${tw`xl:bg-transparent shadow-none`}
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

export const InfoCard = styled.div`
  ${tw`flex h-[402px] w-full flex-col items-center rounded-[42px] pt-[79.5px] text-center transition-all duration-700 hover:w-full hover:shadow-[0px_25px_50px_25px_#F6F7FF] `}
  ${tw`sm:w-[424px] sm:hover:w-[424px] xl:w-[420px] `}

  &.shadow-active {
    ${tw`shadow-[0px_25px_50px_25px_rgba(0,0,0,0.2)]`}
  }

  &[data-id='1'] {
    ${tw`sm:pl-0 xl:pl-[72px]`}

    &:hover {
      ${tw`pl-0`}
    }
  }

  &[data-id='3'] {
    ${tw`sm:pr-0 xl:pr-[70px]`}

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
