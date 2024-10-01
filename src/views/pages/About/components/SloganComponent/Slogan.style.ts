import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';
import SloganMask from '../../../../../assets/images/about/Background Mask.png';

interface SloganProps {
  background?: string;
}

export const Slogan = styled.div<SloganProps>`
  ${tw`relative w-auto h-[529px] bg-center bg-no-repeat sm:mt-[730px] xl:mt-[155px] 2xl:bg-cover`}
  background-image: url(${(props) => props.background});

  &::before {
    content: '';
    ${tw`absolute inset-0 bg-cover bg-center z-1 `}
    background-image: url(${SloganMask});
  }
`;

export const SloganWrapper = styled.div`
  ${tw`relative z-10 flex justify-center text-center`}
`;

export const SloganWrapperText = styled.div`
  ${tw`mt-[162px] flex justify-center flex-col items-center`}
`;

export const TipText = styled(Tip)`
  ${tw`h-[20px] text-color-tip-other mt-[2px] sm:w-auto xl:w-[133px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[97px] text-color-white mt-[11px] px-[60px] sm:w-auto xl:w-[732px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[56px] text-color-default mt-[13px] sm:(w-auto px-[5px]) xl:w-[680px]`}
`;

export const SloganWrapperButton = styled.div`
  ${tw``}
`;

export const SloganButtonImage = styled.img`
  ${tw``}
`;

export const SloganButtonText = styled.p`
  ${tw``}
`;
