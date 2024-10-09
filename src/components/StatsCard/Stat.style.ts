import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div<{ isActive?: boolean }>`
  ${tw`flex gap-[11px] min-w-[197px] min-h-[69px]`}
  ${({ isActive }) => isActive && tw`items-center`}
`;

export const Image = styled.img<{ isActive?: boolean }>`
  ${tw`w-16 h-16`}
  ${({ isActive }) => (isActive ? tw`mt-[2px]` : tw``)}
`;

export const TextContainer = styled.div<{ isActive?: boolean }>`
  ${tw`flex flex-col`}
  ${({ isActive }) => (isActive ? tw`mt-[8px]` : tw`mt-[9px]`)}
`;

export const Title = styled.p`
  ${tw`text-36 leading-[100%] font-semibold min-h-[41px] text-color-white`}
`;

export const Description = styled.p<{ isActive?: boolean }>`
  ${tw`font-semibold leading-[100%]`}
  ${({ isActive }) =>
    isActive ? tw`text-color-pink pb-[1px]` : tw`text-color-describe-2`}
`;
