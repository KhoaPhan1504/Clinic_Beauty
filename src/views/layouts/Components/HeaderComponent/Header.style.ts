import tw from 'twin.macro';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  ${tw`relative w-full  sm:(flex justify-center)`}
`;

export const HeaderWrapper = styled.div`
  ${tw`flex mt-[41px] h-[63px] max-w-[1188px] gap-[174px] pr-[3px]`}
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
  ${tw`max-[1140px]:hidden h-full flex items-center pb-[4px]`}
`;

export const HeaderMenuChildren = styled.div`
  ${tw``}
`;

export const MenuItem = styled.li`
  ${tw`float-left list-none`}

  &:nth-child(1) {
    ${tw`mr-[4px]`}
  }

  &:nth-child(2) {
    ${tw`mr-[9px]`}
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
    ${tw`font-semibold`}
    color: ${({ activeColor }) => activeColor || '#FF5733'};
  }

  &:hover {
    ${tw`font-semibold text-color-pink`}
  }
`;

// Button
export const HeaderContact = styled.div`
  ${tw`w-[158px] h-[52px] bg-color-pink rounded-full`}
`;

// Dropdown Menu
export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  ${tw`absolute top-[120px] w-[170px] bg-color-white shadow-lg rounded-[25px] z-40`}
  ${({ isOpen }) => (isOpen ? tw`block` : tw`hidden`)}
`;

export const DropdownItem = styled.div`
  ${tw`h-[50px] w-full flex rounded-[25px] justify-center text-color-title hover:(bg-color-pink text-color-white rounded-[25px])`}
`;

export const Item = styled(NavLink)`
  ${tw`w-full flex justify-center items-center hover:(font-semibold)`}
`;
