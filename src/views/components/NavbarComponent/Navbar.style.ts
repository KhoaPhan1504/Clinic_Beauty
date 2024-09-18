import tw from 'twin.macro';
import styled from 'styled-components';
import { 
  HeaderContact, 
  HeaderMenu, 
  HeaderMore 
} from '../HeaderComponent/Header.style';

export const HeaderIcon = styled.span `
  ${tw`absolute w-[30px] h-[5px] bg-[var(--color-pink)]`}
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::after, &::before {
    content: "";
    ${tw`absolute w-[30px] h-[5px] bg-[var(--color-pink)]`}
  }

  &::after {
    transform: translateY(-200%);
  }

  &::before {
    transform: translateY(200%);
  }
`;

export const HeaderTog = styled.label `
  ${tw`absolute right-[20px] top-[10px] w-[50px] h-[50px] border border-[var(--color-pink)] rounded-[5px] cursor-pointer`}
  display: none;
`;

export const HeaderSidebar = styled.label `
  ${tw`hidden fixed top-0 left-0 right-0 bottom-0 z-[100] bg-[#0000007a]`}
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox'}) `
  display: none;

  &:checked ~ ${HeaderSidebar} {
    display: block !important;
  }

  &:checked ~ ${HeaderMore} {
    ${tw`fixed h-[100%] right-0 w-[50%] top-0 bg-[var(--color-white)] z-[110]`}
  }

  &:checked ~ ${HeaderMore} > ${HeaderMenu} {
    display: block !important;
    ${tw`right-auto top-[30%] left-[10px]`}
  }

  &:checked ~ ${HeaderMore} > ${HeaderContact} {
    display: block !important;
    ${tw`left-[50%] top-[60%] translate-x-[-80%]`}
  }
  
  &:checked ~ ${HeaderMore} > ${HeaderMenu} > ul {
    ${tw`flex flex-col`}
  }
  
  &:checked ~ ${HeaderMore} > ${HeaderMenu} > ul > li {
    ${tw`w-[100%] p-[10px]`}
  }
`;