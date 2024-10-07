import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`mt-[97px] pl-[52px] flex justify-center gap-[16px] mb-[56px]`}
`;

export const Circle = styled.div<{ isActive?: boolean }>`
  ${tw`flex h-[35px] w-[35px] items-center justify-center rounded-full transition-colors`}
  ${({ isActive }) =>
    isActive
      ? tw`bg-color-title text-color-white shadow-[0px_7px_37px_4px_#E6E9FF]`
      : tw`cursor-pointer hover:bg-color-default`}
`;
