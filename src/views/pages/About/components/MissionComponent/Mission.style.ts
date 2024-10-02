import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Mission = styled.div`
  ${tw`h-auto w-auto`}
`;

export const ProfessionBG = styled.img`
  ${tw`absolute -z-10 translate-y-[-240px]`}
`;

export const MissionWrapper = styled.div`
  ${tw`h-full w-full flex sm:(flex-col pt-[50px]) xl:(flex-row pt-[106px]) 2xl:justify-center`}
`;

export const MissionWrapperImage = styled.div`
  ${tw`sm:(pl-0 mt-[65px] flex justify-center) xl:(pl-[30px] mt-0 w-full justify-start) x:(pl-[126px] h-full w-auto)`}
`;

export const MissionImage = styled.img`
  ${tw``}
`;

export const MissionWrapperText = styled.div`
  ${tw`sm:(pt-[70px] pl-0 flex flex-col items-center)  x:(pl-[150px] pt-[11px] items-start)`}
`;

export const TipText = styled(Tip)`
  ${tw`w-[95px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`w-[536px] h-[91px] mt-[12px]`}
  ${tw`sm:text-center x:text-left`}
`;

export const DescribeText = styled(Describe)`
  ${tw`w-[483px] h-[133px] mt-[12px]`}
  ${tw`sm:text-center x:text-left`}
`;
