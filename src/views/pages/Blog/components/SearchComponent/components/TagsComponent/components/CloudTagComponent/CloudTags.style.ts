import styled from 'styled-components';
import tw from 'twin.macro';
import { Tip } from '../../../../../../../../../components/Content/Text.style';

export const Container = styled.div`
  ${tw`rounded-[25px] p-[58px_28px_57px_53px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[53px] x:mt-[81px]`}
`;

export const Title = styled(Tip)`
  ${tw`text-[#091156]`}
`;

export const TagGrid = styled.div`
  ${tw`mt-[20px] grid translate-x-[-5px] grid-cols-[repeat(3,83px)] gap-[19px_7px]`}
`;
