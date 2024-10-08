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

export const Core = styled.div`
  ${tw`w-screen max-w-1140 h-[732px] rounded-[42px] text-center`}
  ${tw`sm:(mx-auto mt-[120px])`}
  ${tw`lg:(mt-[110px] ) xl:(mt-[132px])`}
`;

export const CoreWrapper = styled.div`
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
  ${tw`max-w-[417px] h-[97px] pt-[12px]`}
  ${tw`sm:(leading-[40px]) lg:(leading-[42px]) xl:(leading-[44px])`}
`;

export const InfoDescribe = styled(Describe)`
  ${tw`w-full h-[51px] text-center pt-6 font-normal`}
  ${tw`sm:(max-w-[700px]) lg:(max-w-[600px]) xl:(max-w-[848px])`}
`;

export const CoreItem = styled.div`
  ${tw`w-full mt-[11px]`}
`;

export const CoreCol = styled.div`
  ${tw`flex justify-between items-center w-full my-[20px]`}
  ${tw`sm:(flex-wrap justify-center gap-[10px]) lg:() xl:justify-between`}
`;

export const CoreItemCard = styled(Card)`
  ${tw`flex justify-center items-center`}
  transition: all 0.7s ease;

  &:hover {
    ${tw`translate-y-[10px]`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &[data-id='1'] {
    ${tw`xl:mr-[37px]`}
  }

  &[data-id='3'] {
    ${tw`xl:ml-[37px]`}
  }

  ${tw`sm:(w-[300px] h-[400px]) lg:(w-[320px] h-[420px]) xl:(w-[340px] h-[458px]) x:( w-[343px] h-[458px])`}
`;

export const CardWrapperCore = styled(CardWrapper)`
  ${tw`h-[458px] sm:w-auto md:w-[343px]`}
`;
