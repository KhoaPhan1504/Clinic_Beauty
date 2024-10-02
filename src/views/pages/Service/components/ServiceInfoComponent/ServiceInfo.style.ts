import styled from 'styled-components';
import tw from 'twin.macro';
import {
  AppointmentTextLink,
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceInfo = styled.div`
  ${tw`h-auto w-auto mt-[92px]`}
`;

export const ServiceInfoWrapper = styled.div`
  ${tw`h-full w-full flex sm:(flex-col pt-[50px]) xl:(flex-row) 2xl:justify-center`}
`;

export const ServiceInfoWrapperImage = styled.div`
  ${tw`sm:(pl-0 flex justify-center) xl:(pl-[30px] w-full justify-start) x:(pl-[150px] h-full w-auto)`}
`;

export const ServiceInfoImage = styled.img`
  ${tw``}
`;

export const ServiceInfoWrapperText = styled.div`
  ${tw`sm:(pt-[70px] pl-0 flex flex-col items-center text-center)`}
  ${tw`xl:(text-left items-start) x:(pl-[187px] pt-[27px] items-start)`}
`;

export const ServiceInfoContainer = styled.div`
  ${tw``}
`;

export const TipText = styled(Tip)`
  ${tw`w-[88px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`mt-[11px]`}
  ${tw`sm:(w-auto text-center px-[10px] h-auto) xl:(w-[411px] text-left px-0 h-[103px])`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[87px]`}
  ${tw`sm:(w-auto text-center px-[10px] mt-[10px]) xl:(text-left px-0 mt-0 w-[475px])`}
`;

export const ServiceInfoRedirect = styled.div`
  ${tw`w-[249px] h-[25px] mt-[2px] text-center`}
`;

export const Link = styled(AppointmentTextLink)`
  ${tw``}
`;

export const IconServiceInfo = styled(FontAwesomeIcon)`
  ${tw`font-semibold ml-[10px] mt-[3px] text-color-pink text-[24px]`}
`;
