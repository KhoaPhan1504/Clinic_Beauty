import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Contact = styled.div`
  ${tw`w-screen h-[1072px] sm:mt-[100px] xl:mt-0`}
`;

export const ContactBackground = styled.img`
  ${tw`absolute -z-10 right-0  md:translate-y-0 xl:translate-y-[210px]`}
  content: '';
`;

export const ContactWrapper = styled.div`
  ${tw`flex items-center max-w-[1440px] m-auto h-full xl:(justify-center) x:pt-[50px]`}
`;

export const ContactMain = styled.div`
  ${tw`flex w-full h-full sm:(flex-col) xl:(flex-row justify-center gap-[120px]) x:(pr-0 flex-col gap-0)`}
`;

export const ContactFormInfo = styled.div`
  ${tw`flex`}
  ${tw`sm:(flex-col pl-0 pr-0 justify-center items-center text-center)`}
  ${tw`x:(justify-between flex-row items-start text-start pl-[150px] pr-[122px])`}
`;

export const ContactTitleDesc = styled.div`
  ${tw`flex flex-col sm:(text-center items-center) x:(text-left items-start)`}
`;

export const ContactTip = styled(Tip)`
  ${tw`w-[90px] h-[20px] mb-[11px]`}
`;

export const ContactTitle = styled(Title)`
  ${tw`w-[418px] h-[97px] mb-[13px]`}
`;

export const WrapperDescribe = styled.div`
  ${tw``}
`;

export const ContactDescribe = styled(Describe)`
  ${tw`w-[455px] mt-[31px] h-[28px]`}
`;

export const ContactFormContainer = styled.div`
  ${tw`flex h-auto w-auto sm:flex-col x:flex-row`}
`;

export const ContactImageWrapper = styled.div`
  ${tw`md:(w-full) lg:(w-full flex justify-center) x:(w-2/4 flex-none)`}
`;

export const ContactImageItem = styled.img`
  ${tw`w-[543.95px] h-[421.33px] sm:(ml-0 mt-[120px]) x:(ml-[129px] mt-[113px])`}
`;

export const ContactMainForm = styled.div`
  ${tw`h-full`}
`;

export const ContactFormWrapper = styled.div`
  ${tw`md:(ml-0) x:(ml-[50px])`}
`;

export const ContactMainFormItem = styled.div`
  ${tw`w-full h-auto mt-[35px] md:justify-center x:justify-start`}

  input, textarea {
    color: #091156;
  }
`;
