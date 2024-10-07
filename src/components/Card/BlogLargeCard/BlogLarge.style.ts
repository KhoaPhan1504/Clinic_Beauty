import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonComponent from '../../Button/ButtonComponent';
import { Describe, Title } from '../../Content/Text.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardContainer = styled.div`
  ${tw`flex flex-col overflow-hidden rounded-[50px] bg-color-white shadow-[10px_13px_80px_14px_#F2F4FF]`}
`;

export const Figure = styled.figure`
  ${tw`relative w-full overflow-hidden rounded-t-[50px] bg-color-default pt-[62%]`}
`;

export const Image = styled.img`
  ${tw`absolute inset-0 h-full w-full object-cover`}
`;

export const Article = styled.article`
  ${tw`p-[26px_22px_60px_36px] lg:p-[45px_74px_100px_76px]`}
`;

export const CategoryContainer = styled.div`
  ${tw`flex items-center gap-[15px] pt-[11px]`}
`;

export const CategoryIcon = styled.img`
  ${tw`w-[25px] -translate-y-[1px]`}
`;

export const CategoryText = styled.span`
  ${tw`font-semibold leading-20 text-color-pink`}
`;

export const TitleText = styled(Title)`
  ${tw`mt-[19px] md:min-h-[99px]`}
`;

export const DescribeText = styled(Describe)`
  ${tw`mt-[12px] md:min-h-[99px]`}
`;

export const CustomButton = styled(ButtonComponent)`
  ${tw`mt-[33px] flex h-[58px] min-w-[226px] -translate-x-[.3px] -translate-y-[.5px]  justify-center gap-2 pl-[12px] pt-[16px] shadow-[0px_17px_22px_0px_#FFEDF6]`}
`;

export const Icon = styled(FontAwesomeIcon)`
  ${tw`mt-[5px]`}
`;
