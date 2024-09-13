import tw from 'twin.macro';
import styled from 'styled-components';

const Button = styled.button`
  ${tw`font-semibold text-base cursor-pointer 
  bg-color-pink text-color-white tracking-widest 
  rounded-full transition-all border-none 
  hover:bg-hover-btn active:translate-y-2`}

  &:hover {
    ${tw`bg-hover-btn`}
  }

  &:active {
    ${tw`translate-y-1`}
  }
`;

export default Button;