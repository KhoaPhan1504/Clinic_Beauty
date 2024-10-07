import { Tip } from './../../../../../../../../../components/Content/Text.style';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`rounded-[25px] p-[58px_28px_49px_53px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[51px] x:mt-[80px]`}
`;

export const Title = styled(Tip)`
  ${tw`text-color-title`}
`;

export const CategoriesList = styled.div`
  ${tw`mt-[20px] flex flex-col gap-[3px]`}
`;

export const CategoryItem = styled.div`
  ${tw`min-h-[23px] text-14 leading-21 tracking-widest text-color-default`}
`;
