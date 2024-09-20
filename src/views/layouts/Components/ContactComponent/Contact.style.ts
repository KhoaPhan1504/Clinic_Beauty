import styled from "styled-components";
import tw from "twin.macro";
import { Images } from "../../../../data/ComponentData/Images";

export const Contact = styled.div `
  ${tw`w-screen h-[1072px]`}
`;

export const ContactWrapper = styled.div `
  ${tw`flex items-center max-w-[1440px] m-auto pt-[353px] h-full bg-no-repeat translate-y-[-59px]`}
  background-image: url(${Images.contactBG});
`;

export const ContactMain = styled.div `
  ${tw`flex w-full h-full`}
`;

export const ContactImageWrapper = styled.div `
  ${tw`w-2/4`}
`;

export const ContactImage = styled.div `
  ${tw`w-[520px] h-[614px] mt-[14px] ml-[150px]`}
`;

export const ContactImageItem = styled.img `
  ${tw`w-[520px] h-[614px] flex justify-center`}
`;

export const ContactMainForm = styled.div `
  ${tw`h-full`}
`;

export const ContactFormWrapper = styled.div `
  ${tw`ml-[50px] translate-y-[-145px]`}
`;

export const ContactFormInfo = styled.div `
  ${tw``}
`;

export const ContactTitleDesc = styled.div `
  ${tw`flex flex-col`}
`;

export const ContactTip = styled.span `
  ${tw`font-semibold text-16 w-[90px] h-[20px] leading-20 mb-[11px] text-color-pink`}
`;

export const ContactTitle = styled.h2 `
  ${tw`font-semibold text-36 w-[404px] h-[97px] leading-45 mb-[13px] text-color-title`}
`;

export const ContactDescribe = styled.p `
  ${tw`font-normal text-16 w-[497px] h-[28px] leading-24 tracking-widest text-color-default`}
`;

export const ContactMainFormItem = styled.div `
  ${tw`w-[520px] h-[652px] mt-[43px]`}

  input, textarea {
    color: #091156;
  }
`;