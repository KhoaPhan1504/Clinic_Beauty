import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Vision = styled.div`
  ${tw`h-auto w-auto`}
`;

export const VisionWrapper = styled.div`
  ${tw`h-full w-full flex sm:(flex-col pt-[50px]) xl:(flex-row pt-[111px]) 2xl:justify-center`}
`;

export const VisionWrapperImage = styled.div`
  ${tw`sm:(pl-0 flex justify-center) xl:(pl-[30px] w-full justify-start) x:(pl-[150px] h-full w-auto)`}
`;

export const VisionImage = styled.img`
  ${tw``}
`;

export const VisionWrapperText = styled.div`
  ${tw`sm:(pt-[70px] pl-0 flex flex-col items-center)  x:(pl-[187px] pt-[11px] items-start)`}
`;

export const TipText = styled(Tip)`
  ${tw`w-[88px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`w-[460px] h-[91px] mt-[12px]`}
  ${tw`sm:text-center x:text-left`}
`;

export const DescribeText = styled(Describe)`
  ${tw`w-[483px] h-[133px] mt-[12px]`}
  ${tw`sm:text-center x:text-left`}
`;
