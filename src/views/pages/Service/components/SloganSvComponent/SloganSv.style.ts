import styled from 'styled-components';
import tw from 'twin.macro';
import { Describe, Title } from '../../../../../components/Content/Text.style';
import SloganMask from '../../../../../assets/images/service/Background Mask.png';
import SloganBG from '../../../../../assets/images/service/BG_Slogan.png';

export const Slogan = styled.div`
  ${tw`relative w-auto h-[529px] bg-center bg-no-repeat sm:mt-[120px] xl:mt-[130px] 2xl:bg-cover`}
  background-image: url(${SloganBG});

  &::before {
    content: '';
    ${tw`absolute inset-0 bg-cover bg-center z-1 `}
    background-image: url(${SloganMask});
  }
`;

export const SloganWrapper = styled.div`
  ${tw`relative z-10 flex sm:flex-col xl:flex-row 2xl:justify-center`}
`;

export const SloganWrapperText = styled.div`
  ${tw`flex flex-col sm:(justify-center ml-0 mt-[65px]) xl:(justify-start mt-[171px] ml-[50px]) x:ml-[150px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[97px] text-color-white mt-[11px] sm:(w-auto text-center px-[10px]) xl:(w-[558px] text-left px-0)`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[56px] text-color-default mt-[13px] sm:(w-auto text-center px-[10px]) xl:(w-[558px] px-0 text-left)`}
`;

export const SloganWrapperButton = styled.div`
  ${tw`flex h-auto w-auto items-center justify-center`}
  ${tw`sm:(ml-0 mt-[70px]) xl:(mt-[180px] ml-[168px])`}
`;

export const SloganButtonImage = styled.img`
  ${tw`h-auto w-auto`}
`;

export const SloganButtonText = styled.p`
  ${tw`h-[24px] font-semibold text-16 leading-24 tracking-widest text-color-describe-2 ml-[8px]`}
`;
