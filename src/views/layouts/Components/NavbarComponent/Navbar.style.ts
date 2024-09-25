import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileMenuButton = styled.button`
  ${tw`bg-transparent border-none cursor-pointer w-[50px] h-[50px]`}
`;

export const MobileNavWrapper = styled.div`
  ${tw`absolute top-0 right-0 bg-color-white w-[40vw] h-screen flex flex-col items-center justify-center`}
  
  & ul {
    ${tw`flex flex-col items-center`}
  }

  & li {
    ${tw`mb-[20px]`}
  }
`;

export const NavbarIcon = styled(FontAwesomeIcon) `
  ${tw`text-[40px] text-color-pink `}
`;