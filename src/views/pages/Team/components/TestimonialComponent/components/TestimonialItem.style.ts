import styled from 'styled-components';
import tw from 'twin.macro';

export const TestimonialContainer = styled.div<{ width: string }>`
  ${tw`flex flex-col items-center text-center shrink-0`}
  width: ${({ width }) => width};
`;

export const TestimonialImage = styled.img`
  ${tw`h-[73px] w-[73px] rounded-circle object-cover shrink-0`}
`;

export const TestimonialContent = styled.p`
  ${tw`max-w-[544px] text-14 leading-21 tracking-widest text-color-default mt-[44px]`}
`;

export const StarContainer = styled.div`
  ${tw`mt-[34px] flex h-[25px] gap-[11px]`}
`;
