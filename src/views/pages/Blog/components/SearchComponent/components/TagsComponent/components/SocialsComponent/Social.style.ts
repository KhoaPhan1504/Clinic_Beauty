import styled from 'styled-components';
import tw from 'twin.macro';
import { Tip } from '../../../../../../../../../components/Content/Text.style';

export const Container = styled.div`
  ${tw`hidden rounded-[25px] p-[58px_28px_57px_53px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:(block mt-[53px]) x:mt-[81px]`}
`;

export const Title = styled(Tip)`
  ${tw`text-color-title`}
`;

export const IconContainer = styled.div`
  ${tw`mt-[30px] flex translate-x-[-5.3px] translate-y-[-1px] items-center gap-[21px]`}
`;

export const IconWrapper = styled.div`
  ${tw`flex h-[43px] w-[43px] items-center justify-center rounded-full shadow-[0px_4px_19px_11px_#F6F7FF]`}
`;

export const Icon = styled.img`
  ${tw``}
`;
