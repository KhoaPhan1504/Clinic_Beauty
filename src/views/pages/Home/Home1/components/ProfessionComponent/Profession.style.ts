import tw from 'twin.macro';
import styled from 'styled-components';
import {
  Card,
  CardWrapper,
} from '../../../../../../components/Card/Card.style';
import {
  Describe,
  RoleTitle,
  Tip,
  Title,
} from '../../../../../../components/Content/Text.style';
import Container from '@mui/material/Container';

export const Profession = styled.div`
  ${tw`h-auto w-full mt-[120px] xl:(h-[861px] mt-[144px]) `}
`;

export const ProfessionBG = styled.img`
  ${tw`absolute -z-10`}
`;

export const ProfessionWrapper = styled(Container)`
  max-width: 1188px !important;
  ${tw`m-auto `}
`;

export const ProfessionDesc = styled.div`
  ${tw`flex justify-center items-center flex-col h-[148px] px-[20px] py-[1px]`}
`;

export const ProInfoTip = styled(Tip)`
  ${tw`w-[160px] h-[20px] pt-[3px]`}
`;

export const ProInfoTitle = styled(Title)`
  ${tw`h-[53px] my-[15px] text-center`}
  ${tw`sm:(w-auto) xl:w-[732px]`}
`;

export const ProInfoDescribe = styled(Describe)`
  ${tw`h-[51px] text-center w-auto mt-[30px]`}
  ${tw`sm:mt-[2px] xl:w-[848px]`}
`;

export const ProItem = styled.div`
  ${tw`flex justify-center items-center w-full mt-[89px]`}
`;

export const ProItemWrapper = styled.div`
  ${tw`flex flex-col gap-1 transition-all sm:(flex-wrap) lg:(flex-wrap justify-center) xl:(flex-nowrap flex-row justify-between)`}
  perspective: 1000px;
`;

export const ProItemRow = styled.div`
  ${tw`flex-1 transition-all bg-transparent relative rounded-[42px]`}
  transform-style: preserve-3d;
  transition:
    transform 0.3s,
    box-shadow 0.3;

  &.active {
    ${tw`bg-color-white`}
    box-shadow: 0px 25px 50px 25px rgba(246, 247, 255, 1);
    z-index: 10;
  }

  &:not(.active) {
    ${tw`bg-color-white shadow-[0px_25px_50px_25px_rgba(246, 247, 255, 1)]`}
    ${tw`xl:bg-transparent shadow-none`}
  }
`;

export const ProfessionItemCard = styled(Card)`
  ${tw`mt-0 w-[340px] h-[528px] `}
  ${tw`sm:(w-[500px] h-[570px] mt-[74px]) xl:(w-[424px] h-[626px]) x:(mt-0 pt-[33px]) `}
  border-radius: 42px;
  box-shadow: none;
  transition: all 0.3s;
`;

export const CardWrapperPro = styled(CardWrapper)`
  ${tw`w-full h-full`}

  &[data-id="1"] {
    ${tw`sm:ml-0 xl:ml-[44px]`}

    &:hover {
      ${tw`ml-0`}
    }
  }

  &[data-id='3'] {
    ${tw`sm:mr-0 xl:mr-[40px]`}

    &:hover {
      ${tw`mr-0`}
    }
  }
`;

export const CardRole = styled(RoleTitle)`
  ${tw`w-[117px] h-[20px] text-center mb-[10px]`}
`;

export const CardContactWrapper = styled.div`
  ${tw`mt-[39px] mr-[3px] flex`}
`;

export const ContactItem = styled.a`
  ${tw`w-[49px] h-[49px] rounded-[50%] mx-[17px]`}
`;

export const ContactIcon = styled.img`
  ${tw`rounded-[50%] w-[49px] h-[49px] scale-[1.5]`}
`;
