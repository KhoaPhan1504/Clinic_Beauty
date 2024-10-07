import styled from 'styled-components';
import tw from 'twin.macro';

export const CardContainer = styled.div`
  ${tw`flex gap-[26px]`}
`;

export const ImageContainer = styled.figure`
  ${tw`h-[82px] w-[82px] overflow-hidden rounded-[10px]`}
`;

export const StyledImage = styled.img`
  ${tw`h-full w-full object-cover`}
`;

export const ContentContainer = styled.div`
  ${tw`flex flex-col gap-[5px] translate-y-[-2px]`}
`;

export const DateTime = styled.time`
  ${tw`min-h-[25px] text-14 font-semibold leading-21 tracking-widest text-color-pink`}
`;

export const Description = styled.p`
  ${tw`max-w-[165px] text-12 leading-18 tracking-widest min-h-[59px] text-color-default`}
`;
