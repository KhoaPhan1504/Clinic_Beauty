import tw from 'twin.macro';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

export const Header = styled.header`
  ${tw`relative top-[41px] w-full  sm:(flex justify-center) xl:px-[24px]`}
`;

export const HeaderWrapper = styled(Container)`
  max-width: 1188px !important;
  ${tw`flex h-[63px] m-auto gap-[174px] justify-between`}
`;

//Image - Logo
export const WrapperImage = styled.div`
  ${tw``}
`;

export const WrapperImageStyle = styled.img`
  ${tw``}
`;

//Menu
export const HeaderMore = styled.div`
  ${tw`flex justify-between items-center`}

  &:hover {
    ${tw``}
  }
`;

export const HeaderMenu = styled.div`
  ${tw`max-[1140px]:hidden h-full flex items-center`}
`;

export const HeaderMenuChildren = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen && tw`flex flex-col`}
`;

export const MenuItem = styled.li`
  ${tw`float-left list-none`}

  &:nth-child(1) {
    ${tw`mr-[4px]`}
  }

  &:nth-child(2) {
    ${tw`mr-[9px] mb-[2px]`}
  }

  &:nth-child(3) {
    ${tw`mr-[10px]`}
  }

  &:nth-child(4) {
    ${tw`mr-[12px]`}
  }

  &:nth-child(5) {
    ${tw`mr-[35px]`}
  }
`;

export const MenuLink = styled.a<{ color?: string; activeColor?: string }>`
  ${tw`not-italic font-light text-16 tracking-wide px-[16px] flex items-center justify-center h-full`}
  color: ${({ color }) => color || '#8B8B8B'};

  &.active {
    ${tw``}
    color: ${({ activeColor }) => activeColor || '#FF5733'};
  }

  &:hover {
    ${tw`font-semibold text-color-pink`}
  }
`;

// Button
export const HeaderContact = styled.div`
  ${tw`w-[158px] h-[52px] bg-color-pink rounded-full flex mb-[3px]`}
`;

// Dropdown Menu
export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  ${tw`absolute top-[50px] w-[170px] bg-color-white shadow-lg rounded-[25px] z-40`}
  ${({ isOpen }) => (isOpen ? tw`block` : tw`hidden`)}
`;

export const DropdownItem = styled.div`
  ${tw`h-[50px] w-full flex rounded-[25px] justify-center text-color-title hover:(bg-color-pink text-color-white rounded-[25px])`}
`;

export const Item = styled(NavLink)`
  ${tw`w-full flex justify-center items-center hover:(font-semibold)`}
`;
