import styled from 'styled-components';
import tw from 'twin.macro';
import { Tip } from '../../../../../../../../../components/Content/Text.style';

export const RecentPostsContainer = styled.div`
  ${tw`basis-full rounded-[25px] p-[57px_31px_60px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[76px] md:basis-0`}
`;

export const TitleText = styled(Tip)`
  ${tw`text-color-title`}
`;

export const PostsList = styled.div`
  ${tw`mt-[27px] flex flex-col gap-[19px]`}
`;
