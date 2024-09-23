import tw from 'twin.macro';
import styled from 'styled-components';

export const Header = styled.header`
  ${tw`relative w-screen px-[20px]`}
`;

export const HeaderWrapper = styled.div `
  ${tw` h-[63px] mt-[50px] ml-[126px] flex`}
`;

//Image - Logo
export const WrapperImage = styled.div `
  ${tw`mt-[-9px] md:mr-[230px] lg:mr-[450px] xl:mr-[-34px] x:mr-0`}
`;

export const WrapperImageStyle = styled.img ` 
  ${tw``}
`;

//Menu
export const HeaderMore = styled.div `
  ${tw`w-auto h-full flex justify-between items-center pb-[21px] max-[1140px]:hidden sm:ml-[10px] md:ml-[20px] lg:ml-[50px] xl:ml-[171px]`}
`;

export const HeaderMenu = styled.div `
  ${tw`max-[1140px]:hidden`}
`;

export const HeaderMenuChildren = styled.div `
  ${tw`flex m-0 pl-[4px] max-[1140px]:flex-col`}
`;

export const MenuItem = styled.li `
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

export const MenuLink = styled.a `
  ${tw`not-italic font-light text-16 tracking-wide text-[#8B8B8B] px-[16px]`}

  &.active {
    ${tw`font-semibold text-color-title`}
  }

  &:hover {
    ${tw`font-semibold text-color-pink`}
  }
`;

// Button
export const HeaderContact = styled.div `
  ${tw`bg-color-pink rounded-full`}
`;