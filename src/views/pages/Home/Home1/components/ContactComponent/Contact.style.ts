import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';

export const Contact = styled.div`
  ${tw`w-auto h-[1072px] sm:mt-[220vh] xl:mt-[220px] x:mt-0`}
`;

export const ContactBackground = styled.img`
  ${tw`absolute -z-10 left-0  sm:translate-y-0 xl:translate-y-[-59px]`}
  content: '';
`;

export const ContactWrapper = styled.div`
  ${tw`flex items-center max-w-[1440px] m-auto h-full xl:(justify-center) x:pt-[149px]`}
`;

export const ContactMain = styled.div`
  ${tw`flex w-full h-full sm:flex-col xl:(pr-[110px]) x:(pr-0 flex-col)`}
`;

export const ContactFormInfo = styled.div`
  ${tw`sm:pl-0 xl:pl-[53.5%]`}
`;

export const ContactTitleDesc = styled.div`
  ${tw`flex flex-col sm:(text-center items-center) x:(text-left items-start)`}
`;

export const ContactTip = styled(Tip)`
  ${tw`w-[90px] h-[20px] mb-[11px]`}
`;

export const ContactTitle = styled(Title)`
  ${tw`w-[404px] h-[97px] mb-[13px]`}
`;

export const WrapperDescribe = styled.div`
  ${tw`flex sm:justify-center x:justify-start`}
`;

export const ContactDescribe = styled(Describe)`
  ${tw`w-[497px] h-[28px]`}
`;

export const ContactFormContainer = styled.div`
  ${tw`h-auto w-auto flex sm:flex-col xl:flex-row`}
`;

export const ContactImageWrapper = styled.div`
  ${tw`sm:(w-full) lg:(w-full flex justify-center) x:(w-2/4 flex-none)`}
`;

export const ContactImage = styled.div`
  ${tw``}
`;

export const ContactImageItem = styled.img`
  ${tw`w-[519px] h-[402px] mt-[14px] sm:(flex justify-center) lg:ml-0 x:(ml-[100px] mt-[80px])`}
`;

export const ContactMainForm = styled.div`
  ${tw`h-full`}
`;

export const ContactFormWrapper = styled.div`
  ${tw`sm:(ml-0) x:(ml-[50px])`}
`;

export const ContactMainFormItem = styled.div`
  ${tw`w-full h-auto mt-[43px] sm:justify-center x:justify-start`}

  input, textarea {
    color: #091156;
  }
`;
