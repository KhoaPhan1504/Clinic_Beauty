import tw from 'twin.macro';
import styled from 'styled-components';
import ButtonComponent from '../../../../../../components/Button/ButtonComponent';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';
import Container from '@mui/material/Container';

export const About = styled.div`
  ${tw`w-auto h-auto bg-transparent mt-[40px] sm:mt-0`}
`;

export const AboutBackground = styled.img`
  ${tw`absolute -z-10 right-0  sm:translate-y-0 xl:translate-y-[-220px]`}
  content: '';
`;

export const AboutWrapper = styled(Container)`
  max-width: 1188px !important;
  ${tw`flex items-center m-auto sm:(pt-[110px]) xl:pt-[133px]`}
`;

export const AboutContainer = styled.div`
  ${tw`flex flex-col w-full h-auto  sm:(text-center) xl:(flex-row text-start)`}
`;

export const AboutContainerText = styled.div`
  ${tw`sm:(w-full flex justify-center) xl:(justify-start)`}
`;

export const AboutTitleDesc = styled.div`
  ${tw`w-auto h-auto flex flex-col items-center text-center`}
  ${tw`xl:(items-start text-start w-[664px] h-[292px])`}
`;

export const AboutTip = styled(Tip)`
  ${tw`w-[73px] h-[20px]`}
`;

export const AboutTitle = styled(Title)`
  ${tw`w-auto h-[52px] mt-[12px]`}
`;

export const AboutDescribe = styled(Describe)`
  ${tw`w-auto h-[196px] mt-[70px] xl:(w-[483px] mt-[19px])`}
`;

export const AboutBtnGroup = styled.div`
  ${tw`mt-[120px] gap-[40px] flex flex-col justify-center sm:(flex-row gap-0) xl:mt-[52px]`}
`;

export const AboutBtnLeft = styled.div``;

export const BtnLearnMore = styled(ButtonComponent)`
  ${tw`w-[200px] h-[58.36px] py-3 pr-[1px] pl-[4px]`}
`;

export const AboutBtnRight = styled.div`
  ${tw`flex justify-center items-center h-full sm:ml-[44px]`}
`;

export const AboutWatch = styled.button`
  ${tw`flex justify-between items-center w-full bg-transparent border-none p-0 cursor-pointer transition-all`}

  &:active {
    ${tw`translate-y-[10px]`}
  }
`;

export const AboutWatchImg = styled.img``;

export const AboutWatchText = styled.span`
  ${tw`ml-[13px] leading-24 tracking-widest font-semibold text-16`}
`;

export const AboutContainerImage = styled.div`
  ${tw`w-full h-full pt-[44px] rounded-[50px] sm:(mt-[120px] flex justify-center) xl:(m-0)`}
`;

export const AboutImg = styled.img``;
