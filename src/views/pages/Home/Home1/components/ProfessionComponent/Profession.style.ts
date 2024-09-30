import tw from 'twin.macro';
import styled from 'styled-components';
import {
  Card,
  CardWrapper,
} from '../../../../../../components/Card/Card.style';
import { Describe, RoleTitle, Tip, Title } from '../../../../../../components/Content/Text.style';

export const Profession = styled.div`
  ${tw`h-[861px] md:(w-auto ml-0 mt-[150px]) lg:md:(w-auto mt-[150px]) xl:(w-full ml-[3px] mt-[300px]) x:mt-[144px] 2xl:(ml-0 flex justify-center)`}
`;

export const ProfessionWrapper = styled.div`
  ${tw`flex items-center flex-col max-w-1140 h-full md:ml-0 xl:ml-[68px] x:ml-[147px] 2xl:(ml-0)`}
`;

export const ProfessionDesc = styled.div`
  ${tw`flex justify-center items-center flex-col max-w-[848px] h-[148px] px-[20px] py-[1px]`}
`;

export const ProInfoTip = styled(Tip)`
  ${tw`w-[160px] h-[20px] pt-[3px]`}
`;

export const ProInfoTitle = styled(Title)`
  ${tw`h-[53px] my-[15px] text-center`}
  ${tw`md:(w-auto) xl:w-[732px]`}
`;

export const ProInfoDescribe = styled(Describe)`
  ${tw`h-[51px] text-center mt-[2px] `}
  ${tw`md:(w-auto) xl:w-[848px]`}
`;

export const ProItem = styled.div`
  ${tw`flex justify-center items-center w-full mt-[89px]`}
`;

export const ProItemWrapper = styled.div`
  ${tw`flex gap-1 transition-all md:(flex-wrap flex-col) lg:(flex-wrap flex-col justify-center) xl:(flex-nowrap flex-row justify-between)`}
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
    ${tw`xl:bg-transparent shadow-none`}
  }
`;

export const ProfessionItemCard = styled(Card)`
  ${tw`md:(w-[500px] h-[570px]) xl:(w-[424px] h-[626px]) x:(mt-0 pt-[33px]) `}
  border-radius: 42px;
  box-shadow: none;
  transition: all 0.3s;
`;

export const CardWrapperPro = styled(CardWrapper)`
  ${tw`w-[424px] h-[626px]`}

  &[data-id="1"] {
    ${tw`md:ml-0 xl:ml-[44px]`}

    &:hover {
      ${tw`ml-0`}
    }
  }

  &[data-id='3'] {
    ${tw`md:mr-0 xl:mr-[40px]`}

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
