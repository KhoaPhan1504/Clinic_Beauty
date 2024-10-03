import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';
import ButtonComponent from '../../../../../components/Button/ButtonComponent';

export const Quota = styled.div`
  ${tw`w-full h-[389.63px] pt-[119px] md:mb-[-256px] xl:mb-[130px] x:mb-[24px]`}
`;

export const QuotaWrapper = styled.div`
  ${tw`w-full h-full flex sm:(flex-col items-center text-center)`}
  ${tw`xl:(flex-row items-start text-start) 2xl:justify-center`}
`;

export const QuotaWrapperText = styled.div`
  ${tw`sm:(pl-0) xl:pl-[150px]`}
`;

export const TipText = styled(Tip)`
  ${tw`h-[20px] sm:w-auto xl:w-[117px] `}
`;

export const TitleText = styled(Title)`
  ${tw`h-[94px] mt-[9px] sm:w-auto xl:w-[642px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[64px] mt-[19px] sm:(w-auto px-[10px]) xl:(w-[561px] px-0)`}
`;

export const QuotaWrapperButton = styled.div`
  ${tw`sm:(ml-0 pt-[50px]) x:(ml-[125px] pt-[69px])`}
`;

export const QuotaBtn = styled(ButtonComponent)`
  ${tw`w-[316px] h-[58px]`}
`;
