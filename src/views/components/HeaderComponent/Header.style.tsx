import tw from 'twin.macro';
import styled from 'styled-components';

export const Header = styled.header`
  ${tw`absolute top-[40px] z-50 w-full px-[20px] bg-opacity-0`}
`;

export const HeaderWrapper = styled.div `
  ${tw`relative max-w-1140 h-[63px] my-[10px] ml-[130px] flex`}
`;

export const WrapperImage = styled.div `
  ${tw`relative bottom-[0.55rem] right-[0.26rem]`}
`;

export const WrapperImageStyle = styled.img `
  ${tw``}
`;

export const HeaderMore = styled.div `
  ${tw`w-[481px] h-[25px] flex justify-between items-center`}
`;

export const HeaderMenu = styled.div `
  ${tw`absolute top-[9px] left-[432px] block`}
`;

export const HeaderMenuChildren = styled.div `
  ${tw`flex m-0 p-0`}
`;

export const MenuItem = styled.li `
  ${tw`float-left list-none`}

  &:nth-child(1) {
    ${tw`mr-[9px]`}
  }

  &:nth-child(2) {
    ${tw`mr-[13px]`}
  }

  &:nth-child(3) {
    ${tw`mr-[14px]`}
  }
  &:nth-child(4) {
    ${tw`mr-[16px]`}
  }
`;

export const MenuLink = styled.a `
  ${tw`not-italic font-light text-base tracking-widest text-[#8B8B8B] px-[16px]`}

  &.active {
    ${tw`font-semibold text-color-title`}
  }

  &:hover {
    ${tw`font-semibold text-color-pink`}
  }
`;

export const HeaderContact = styled.div `
  ${tw`absolute top-[21px] left-[982px] translate-y-[-50%]`}
`;