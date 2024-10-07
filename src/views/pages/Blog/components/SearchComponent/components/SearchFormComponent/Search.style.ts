import styled from 'styled-components';
import tw from 'twin.macro';

export const SearchContainer = styled.div`
  ${tw`flex h-[65px] overflow-hidden rounded-full shadow-[-2px_4px_31px_9px_#F2F4FF]`}
`;

export const SearchInput = styled.input`
  ${tw`grow border-none pl-[31px] py-[20px] outline-none placeholder:(leading-24 font-normal text-16 tracking-widest text-color-default) `}
`;

export const SearchButton = styled.div`
  ${tw`flex w-[76px] items-center justify-center bg-color-title cursor-pointer`}
`;

export const SearchIcon = styled.img`
  ${tw``}
`;
