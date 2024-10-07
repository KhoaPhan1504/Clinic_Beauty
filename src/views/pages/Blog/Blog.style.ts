import styled from 'styled-components';
import tw from 'twin.macro';

export const ContentContainer = styled.div`
  ${tw`w-auto h-auto 2xl:(flex justify-center)`}
`;

export const ItemContent = styled.div`
  ${tw`flex flex-col-reverse pt-[108px] md:(flex-row) x:gap-0`}
`;
