import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Assistance = styled.div`
  ${tw`w-full h-full sm:mt-[70px]  x:mt-[155px]`}
`;

export const Wrapper = styled.div`
  ${tw`w-full h-auto flex flex-col items-center text-center`}
`;

export const WrapperText = styled.div`
  ${tw`flex flex-col items-center h-auto w-full`}
`;

export const TipText = styled(Tip)`
  ${tw`w-[140px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[57px] mt-[12px] sm:w-auto x:w-[612px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`h-[28px] mt-[12px] sm:(px-[10px] w-auto) xl:(px-0 w-[680px])`}
`;

export const WrapperInfo = styled.div`
  ${tw`mt-[110px] w-full sm:(pl-0) xl:pl-[150px] 2xl:(pl-0 flex justify-center)`}
`;

export const WrapperItem = styled.div`
  ${tw`flex flex-col gap-[79px] sm:items-center x:items-start`}
`;

export const WrapperItemChild = styled.div`
  ${tw`flex sm:flex-col lg:flex-row`}
`;

export const WrapperImage = styled.img`
  ${tw``}
`;

export const WrapperContent = styled.div`
  ${tw`sm:(ml-0 mt-[26px]) lg:ml-[50px] xl:(ml-[172px] mt-[63px])`}
`;

export const Personal = styled.div`
  ${tw`w-auto h-[22px] flex`}
`;

export const Name = styled.span`
  ${tw`font-semibold text-18 leading-22.5 text-color-title`}
`;

export const Job = styled.p`
  ${tw`font-normal text-14 italic leading-17.5 text-color-default ml-[5px] mt-[4px]`}
`;

export const Introduce = styled.p`
  ${tw`w-[434px] h-[77px] font-normal text-16 leading-24 tracking-widest text-color-default text-left mt-[21px]`}
`;
