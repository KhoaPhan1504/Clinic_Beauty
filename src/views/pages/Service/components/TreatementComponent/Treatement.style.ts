import styled from 'styled-components';
import tw from 'twin.macro';
import {
  AppointmentTextLink,
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Treatement = styled.div`
  ${tw`h-auto w-auto`}
`;

export const TreatementWrapper = styled.div`
  ${tw`h-full w-full flex sm:(flex-col pt-[50px]) xl:(flex-row pt-[92px]) 2xl:justify-center`}
`;

export const TreatementWrapperImage = styled.div`
  ${tw`sm:(pl-0 flex justify-center) xl:(pl-[30px] w-full justify-start) x:(pl-[190px] h-full w-auto)`}
`;

export const TreatementImage = styled.img`
  ${tw``}
`;

export const TreatementWrapperText = styled.div`
  ${tw`sm:(pt-[70px] pl-0 flex flex-col items-center text-center)`}
  ${tw`xl:(pl-[150px] pt-[27px] items-start text-start)`}
`;

export const TreatementContainer = styled.div`
  ${tw``}
`;

export const TipText = styled(Tip)`
  ${tw`w-[88px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[103px] mt-[11px]`}
  ${tw`sm:(text-center w-auto px-[10px]) xl:(text-left w-[411px] px-0)`}
`;

export const DescribeText = styled(Describe)`
  ${tw` h-[87px]`}
  ${tw`sm:(text-center w-auto px-[10px]) xl:(text-left w-[475px] px-0)`}
`;

export const TreatementRedirect = styled.div`
  ${tw`w-[249px] h-[25px] mt-[2px] text-center`}
`;

export const Link = styled(AppointmentTextLink)`
  ${tw``}
`;

export const IconTreatement = styled(FontAwesomeIcon)`
  ${tw`font-semibold ml-[10px] mt-[3px] text-color-pink text-[24px]`}
`;
