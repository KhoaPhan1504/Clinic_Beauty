import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';
import Container from '@mui/material/Container';

export const Contact = styled.div`
  ${tw`w-full h-auto x:h-[1072px]`}
`;

export const ContactBackground = styled.img`
  ${tw`absolute -z-10 left-0  sm:translate-y-0 xl:translate-y-[-59px]`}
  content: '';
`;

export const ContactWrapper = styled(Container)`
  max-width: 1188px !important;
  ${tw`flex items-center m-auto h-auto`}
`;

export const ContactMain = styled.div`
  ${tw`flex flex-col w-full h-full pt-[147px]`}
`;

export const ContactFormInfo = styled.div`
  ${tw`pl-0 xl:pl-[54.4%]`}
`;

export const ContactTitleDesc = styled.div`
  ${tw`flex flex-col text-center items-center x:(text-left items-start)`}
`;

export const ContactTip = styled(Tip)`
  ${tw`w-auto h-[20px] mb-[12px] x:w-[90px]`}
`;

export const ContactTitle = styled(Title)`
  ${tw`w-auto h-[97px] mb-[13px] x:w-[404px]`}
`;

export const WrapperDescribe = styled.div`
  ${tw`w-auto flex justify-center x:justify-start`}
`;

export const ContactDescribe = styled(Describe)`
  ${tw`w-auto h-[28px] x:w-[497px]`}
`;

export const ContactFormContainer = styled.div`
  ${tw`h-auto w-auto flex flex-col xl:flex-row`}
`;

export const ContactImageWrapper = styled.div`
  ${tw`w-full flex justify-center  x:(w-2/4 flex-none)`}
`;

export const ContactImageItem = styled.img`
  ${tw`w-1/2 mt-[80px] mr-[48px] sm:(w-auto h-[402px])`}
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
