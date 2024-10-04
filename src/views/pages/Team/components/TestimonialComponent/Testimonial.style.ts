import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const TestimonialSection = styled.section`
  ${tw`relative pb-[16px] pt-[117px] w-full flex justify-center mb-[71px]`}
`;

export const BackgroundImage = styled.img`
  ${tw`absolute left-0 right-0 top-[2px] w-full object-cover -z-10`}
`;

export const TestimonialWrapperContent = styled.div`
  ${tw`w-full flex flex-col items-center gap-3 text-center`}
`;

export const TipText = styled(Tip)`
  ${tw`h-[20px] sm:w-auto x:w-[138px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[57] sm:w-auto x:w-[612px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[28px] mt-[12px] sm:w-auto x:w-[680px]`}
`;

export const TestimonialSlider = styled.div`
  ${tw`relative mt-[60px] flex items-center justify-center`}
`;

export const ArrowButtonContainer = styled.div`
  ${tw`absolute top-[132px] hidden h-[27px] w-[778px] justify-between min-[900px]:flex`}
`;

export const ArrowButton = styled.img<{ disabled: boolean }>`
  ${tw`cursor-pointer transition-opacity`}
  ${({ disabled }) => disabled && tw`pointer-events-none opacity-30`}
`;

export const TestimonialListContainer = styled.div`
  ${tw`relative h-[400px] w-[550px] overflow-hidden min-[400px]:h-[320px] min-[570px]:h-[281px]`}
`;

export const TestimonialList = styled.div<{ gap: number; left: number }>`
  ${tw`absolute bottom-0 top-0 flex touch-pan-x snap-x snap-mandatory overflow-x-hidden transition-[left] duration-1000`}
  gap: ${({ gap }) => `${gap}px`};
  left: ${({ left }) => `${left}px`};
`;

export const MobileGroupButton = styled.div`
  ${tw``}
`;

export const MobileArrowButton = styled.i`
  ${tw`text-18 text-color-default`}
`;
