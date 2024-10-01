import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Title,
} from '../../../../../../components/Content/Text.style';
import { FormControl } from '../../../../../../components/Form/Form.style';
import ButtonComponent from '../../../../../../components/Button/ButtonComponent';

export const Contact = styled.div`
  ${tw`w-full h-[122px] flex justify-center mt-[172px] mb-[121px]`}
`;

export const ContactWrapper = styled.div`
  ${tw`flex justify-between w-[1139px] sm:flex-col xl:flex-row`}
`;

export const ContactWrapperText = styled.div`
  ${tw`sm:(flex flex-col items-center text-center) xl:(items-start text-start)`}
`;

export const ContactTitle = styled(Title)`
  ${tw`w-[391px] h-[50px]`}
`;

export const ContactDescribe = styled(Describe)`
  ${tw`w-[391px] h-[60px] mt-[13px]`}
`;

export const ContactUs = styled.span`
  ${tw`font-semibold text-16 leading-24 tracking-widest text-color-title`}
`;

export const ContactWrapperForm = styled.div`
  ${tw`pt-[13px]`}
`;

export const ContactForm = styled.div`
  ${tw`flex h-[73px] sm:(px-[5px] justify-center) xl:(px-0 justify-start)`}
`;

export const FormInput = styled(FormControl)`
  ${tw`rounded-l-[25px] rounded-none pl-[36px] sm:w-[500px] xl:w-[545px]`}
`;

export const FormButton = styled(ButtonComponent)`
  ${tw`w-[113px] rounded-r-[25px] rounded-none  mt-0 h-[73px] p-0 flex justify-center items-center`}
`;

export const ContactToll = styled.p`
  ${tw`font-normal italic text-12 leading-18 tracking-widest text-color-default mt-[8px]`}
  ${tw`sm:text-center xl:text-right`}
`;
