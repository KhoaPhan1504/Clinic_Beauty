import tw from 'twin.macro';
import styled from 'styled-components';
import ButtonComponent from '../../../../../../components/Button/ButtonComponent';
import { Describe, Tip, Title } from '../../../../../../components/Content/TextComponent';

export const About = styled.div`
  ${tw`w-screen h-auto bg-transparent md:mt-[420px] lg:mt-0 xl:mt-0`}
`;

export const AboutBackground = styled.img`
  ${tw`absolute -z-10 right-0  md:translate-y-0 xl:translate-y-[-220px]`}
  content: '';
`;

export const AboutWrapper = styled.div`
  ${tw`flex items-center max-w-[1440px] m-auto md:(pt-[110px]) xl:pt-[134px]`}
`;

export const AboutContainer = styled.div`
  ${tw`flex w-full h-auto  md:(flex-col text-center) xl:(flex-row text-start)`}
`;

export const AboutContainerText = styled.div`
  ${tw`md:(w-full flex justify-center) xl:(justify-start)`}
`;

export const AboutTitleDesc = styled.div`
  ${tw`w-[664px] h-[292px] flex flex-col items-start md:(ml-0 items-center) xl:(ml-[150px] items-start)`}
`;

export const AboutTip = styled(Tip)`
  ${tw`w-[73px] h-[20px]`}
`;

export const AboutTitle = styled(Title)`
  ${tw`max-w-[664px] h-[52px] mt-[12px]`}
`;

export const AboutDescribe = styled(Describe)`
  ${tw`h-[196px] mt-[19px] md:w-[483px] lg:w-full xl:w-[483px]`}
`;

export const AboutBtnGroup = styled.div`
  ${tw`mt-[52px] flex`}
`;

export const AboutBtnLeft = styled.div``;

export const BtnLearnMore = styled(ButtonComponent)`
  ${tw`w-[200px] h-[58.36px] py-3 pr-[1px] pl-[4px]`}
`;

export const AboutBtnRight = styled.div`
  ${tw`flex justify-center items-center h-full ml-[44px]`}
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
  ${tw`w-full h-full pt-[44px] pl-[72px] rounded-[50px] md:(mt-[120px] flex justify-center pl-0) xl:(m-0 pr-[148px])`}
`;

export const AboutImg = styled.img``;
