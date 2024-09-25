import styled from "styled-components";
import tw from "twin.macro";

export const Contact = styled.div `
  ${tw`w-auto h-[1072px] md:mt-[220vh] xl:mt-0`}
`;

export const ContactBackground = styled.img `
  ${tw`absolute -z-10 left-0  md:translate-y-0 xl:translate-y-[-59px]`}
  content: '';
`;

export const ContactWrapper = styled.div `
  ${tw`flex items-center max-w-[1440px] m-auto h-full xl:(pt-[200px] justify-center) x:(pt-[294px])`}
`;

export const ContactMain = styled.div `
  ${tw`flex w-full h-full md:flex-col xl:(flex-row pr-[110px]) x:(pr-0)`}
`;

export const ContactImageWrapper = styled.div `
  ${tw`md:(w-full) lg:(w-full flex justify-center) x:(w-2/4 flex-none)`}
`;

export const ContactImage = styled.div `
  ${tw`w-full h-[614px] mt-[14px] md:(flex justify-center) lg:ml-0 x:ml-[100px]`}
`;

export const ContactImageItem = styled.img `
  ${tw`w-[520px] h-[614px] flex justify-center`}
`;

export const ContactMainForm = styled.div `
  ${tw`h-full`}
`;

export const ContactFormWrapper = styled.div `
  ${tw`md:(ml-0 translate-y-0) x:(ml-[50px] translate-y-[-145px])`}
`;

export const ContactFormInfo = styled.div `
  ${tw``}
`;

export const ContactTitleDesc = styled.div `
  ${tw`flex flex-col md:(text-center items-center) x:(text-left items-start)`}
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
  ${tw`w-full h-auto mt-[43px] md:justify-center x:justify-start`}

  input, textarea {
    color: #091156;
  }
`;