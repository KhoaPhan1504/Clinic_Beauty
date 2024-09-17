import styled from "styled-components";
import tw from "twin.macro";
import ButtonComponent from "../Button/ButtonComponent";

export const FormGroup = styled.div `
  ${tw`w-full my-[38px] mx-auto`}
`;

export const ContactRowname = styled.div `
  ${tw`w-[520px] flex justify-between m-0`}
`;

export const ContactColInput = styled.div `
  ${tw`w-[242.21px] h-[61.58px]`}
`;

export const FormControl = styled.input `
  ${tw`text-16 leading-24 rounded-[15px] bg-color-white text-color-text-input tracking-widest w-full`}
  border: 1px solid #D9DDFE;

  &::placeholder {
    ${tw`opacity-60`}
  }

  &:focus-visible {
    ${tw`outline-none`}
  }

  &.contact_name {
    ${tw`w-[242.21px] h-[61.58px]`}
  }

  &.contact_input {
    ${tw`h-[61.58px]`}
  }
`;

export const TextArea = styled.textarea `
  ${tw`resize-none leading-24 h-[239.47px] bg-color-white text-color-text-input tracking-widest w-full pt-[26px] rounded-[15px]`}
  border: 1px solid #D9DDFE;

  &::placeholder {
    ${tw`opacity-60`}
  }

  &:focus-visible {
    ${tw`outline-none`}
  }
`;

export const FormButton = styled(ButtonComponent) `
  ${tw`w-[248px] h-[58px] mt-[12px]`}
  padding: 0 1px 3px 4px;
`;

