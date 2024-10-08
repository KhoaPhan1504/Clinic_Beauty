import styled from 'styled-components';
import tw from 'twin.macro';
import { Title } from '../../../../../components/Content/Text.style';

export const FAQ = styled.section`
  ${tw`mt-[116px] pb-[43px] flex justify-center md:mb-[-360px] xl:mb-[100px] x:mb-[72px]`}
`;

export const HeadingFAQ = styled(Title)`
  ${tw`relative min-h-[66px] translate-y-[0.5px] text-center`}
`;

export const Underline = styled.div`
  ${tw`absolute bottom-0 left-1/2 h-[4.7px] w-[40px] -translate-x-1/2 rounded-full bg-color-pink`}
`;

export const FAQList = styled.div`
  ${tw`mt-[68.5px] flex flex-col`}

  &[data-id="2"] {
    ${tw`mt-[29px]`}
  }

  &[data-id='3'] {
    ${tw`mt-[30px]`}
  }

  &[data-id='4'] {
    ${tw`mt-[30px]`}
  }
`;
