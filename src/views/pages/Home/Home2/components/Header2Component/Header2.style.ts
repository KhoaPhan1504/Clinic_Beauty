import tw from "twin.macro";
import styled from "styled-components";

export const MenuLink = styled.a `
  ${tw`not-italic font-light text-16 tracking-wide text-color-white px-[16px]`}

  &.active {
    ${tw`font-semibold text-color-white`}
  }

  &:hover {
    ${tw`font-semibold text-color-pink`}
  }
`;