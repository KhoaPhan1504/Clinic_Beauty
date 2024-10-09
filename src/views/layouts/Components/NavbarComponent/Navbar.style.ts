import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileMenuButton = styled.button`
  ${tw`bg-transparent border-none cursor-pointer w-[50px] h-[50px]`}
`;

export const MobileNavWrapper = styled.div`
  ${tw`fixed items-center right-0 top-0 bottom-0 bg-color-white z-40 flex justify-around flex-col w-[40%]`}
`;

export const MobileMenuHeader = styled.div`
  ${tw`p-4 flex justify-end`}
`;

export const MobileNavBody = styled.div`
  ${tw`p-4 flex flex-col items-center justify-center h-full`}

  & ul {
    ${tw`flex flex-col items-center`}
  }

  & li {
    ${tw`mb-[20px] flex flex-col`}
  }

  & a {
    ${tw`text-24`}
  }
`;

export const NavbarIcon = styled(FontAwesomeIcon)`
  ${tw`text-[40px] text-color-pink `}
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  ${tw`fixed inset-0 bg-color-black transition-opacity duration-300`}
  opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;
