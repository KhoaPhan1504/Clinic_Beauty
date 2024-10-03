import styled from 'styled-components';
import tw from 'twin.macro';
import Background_Mask from '../../../../../assets/images/team/Background Mask.png';
import Background from '../../../../../assets/images/team/SloganBG.png';
import { Describe, Title } from '../../../../../components/Content/Text.style';

export const Slogan = styled.div`
  ${tw`relative w-auto h-[529px] bg-center bg-no-repeat sm:mt-[130px] xl:mt-[126px] 2xl:bg-cover`}
  background-image: url(${Background});

  &::before {
    content: '';
    ${tw`absolute inset-0 bg-cover bg-center z-1 `}
    background-image: url(${Background_Mask});
  }
`;

export const SloganWrapper = styled.div`
  ${tw`relative z-10 flex flex-col justify-center text-center`}
`;

export const SloganWrapperText = styled.div`
  ${tw`mt-[170px] flex justify-center flex-col items-center`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[97px] text-color-white mt-[9px] px-[60px] sm:w-auto xl:(w-[580px] ml-[23px])`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[56px] text-color-default sm:(w-auto px-[5px]) xl:(w-[680px] pr-[7px])`}
`;
