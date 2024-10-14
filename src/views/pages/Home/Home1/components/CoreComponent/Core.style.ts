import tw from 'twin.macro';
import styled from 'styled-components';
import {
  Card,
  CardWrapper,
} from '../../../../../../components/Card/Card.style';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';
import Container from '@mui/material/Container';

export const Core = styled.div`
  ${tw`w-full h-auto rounded-[42px] text-center mt-[90px]`}
  ${tw`sm:(mx-auto mt-[120px]) lg:(mt-[110px])`}
  ${tw`xl:(mt-[132px] h-[732px])`}
`;

export const CoreWrapper = styled(Container)`
  max-width: 1188px !important;
  ${tw`w-full h-auto flex flex-col items-center`}
`;

export const TitleDesc = styled.div`
  ${tw`w-full flex flex-col items-center`}
  ${tw`sm:(max-w-[700px] text-center) lg:(max-w-[600px]) xl:(max-w-[848px])`}
`;

export const InfoTip = styled(Tip)`
  ${tw`w-auto h-[20px] text-center`}
`;

export const InfoTitle = styled(Title)`
  ${tw`max-w-[417px] h-[97px] pt-[11px]`}
  ${tw`sm:(leading-[40px]) lg:(leading-[42px]) xl:(leading-[44px])`}
`;

export const InfoDescribe = styled(Describe)`
  ${tw`w-full h-[51px] text-center pt-[70px]`}
  ${tw`sm:(max-w-[700px]) lg:(max-w-[600px]) xl:(max-w-[848px] pt-6)`}
`;

export const CoreItem = styled.div`
  ${tw`w-full mt-[80px] xl:mt-[11px]`}
`;

export const CoreCol = styled.div`
  ${tw`flex justify-between flex-col items-center w-full my-[20px]`}
  ${tw`sm:(flex-wrap justify-center gap-[10px]) lg:(flex-row gap-x-[30px])`}
  ${tw`xl:(justify-between)`}
`;

export const CoreItemCard = styled(Card)`
  ${tw`flex justify-center items-center h-[390px] w-[315px]`}
  transition: all 0.7s ease;

  &:hover {
    ${tw`translate-y-[10px]`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &[data-id='1'] {
    ${tw``}
  }

  &[data-id='3'] {
    ${tw``}
  }

  ${tw`sm:(w-[300px] h-[400px]) lg:(w-[320px] h-[420px]) xl:(w-[340px] h-[458px]) x:( w-[343px] h-[458px])`}
`;

export const CardWrapperCore = styled(CardWrapper)`
  ${tw`h-[458px] sm:w-auto md:w-[343px]`}
`;
