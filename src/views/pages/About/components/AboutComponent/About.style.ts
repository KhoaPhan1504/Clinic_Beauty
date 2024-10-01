import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';
export const About = styled.div`
  ${tw`mt-[128px] 2xl:(flex justify-center)`}
`;

export const AboutWrapper = styled.div`
  ${tw`sm:(ml-0 px-[5px]) xl:ml-[70px] x:ml-[145px] 2xl:ml-0`}
`;

export const AboutText = styled.div`
  ${tw``}
`;

export const AboutContainer = styled.div`
  ${tw`flex flex-col`}
`;

export const TipText = styled(Tip)`
  ${tw`h-[20px] sm:(w-auto text-center) xl:(w-[50px] text-left) `}
`;

export const TitleText = styled(Title)`
  ${tw`h-[97px] mt-[9px] sm:(w-auto text-center) xl:(w-[732px] text-left)`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[56px] mt-[13px] sm:(w-auto text-center) xl:(w-[680px] text-left)`}
`;

export const AboutImage = styled.div`
  ${tw`relative flex mt-[57px]`}
`;

export const ImageLarge = styled.img`
  ${tw`block`}
`;

export const ImagePlay = styled.img`
  ${tw`absolute top-1/2 left-1/2 transform`}
  ${tw`sm:(-translate-x-[53%] -translate-y-[47%])`}
  ${tw`md:(-translate-x-[43%] -translate-y-[47%])`}
  ${tw`xl:(-translate-x-[60%] -translate-y-[47%])`}
  ${tw`x:(-translate-x-[93%] -translate-y-[47%])`}
`;
