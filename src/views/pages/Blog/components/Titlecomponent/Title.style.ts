import styled from 'styled-components';
import tw from 'twin.macro';
import { ImageBlog } from '../../../../../data/BlogPage/blogData';
import { Title } from '../../../../../components/Content/Text.style';

export const BlogTitle = styled.div`
  ${tw`relative z-1 flex items-center w-auto h-[285px] bg-center bg-no-repeat sm:mt-[130px] xl:mt-[37px] 2xl:(bg-cover justify-center)`}
  background-image: url(${ImageBlog.BG});

  &::before {
    content: '';
    ${tw`absolute inset-0 bg-cover bg-center z-1 `}
    background-image: url(${ImageBlog.BGMask});
  }
`;

export const TitleWrapper = styled.div`
  ${tw`relative z-10 flex w-full justify-between text-center pl-[89px] pr-[109px] 2xl:max-w-[1400px]`}
`;

export const TitleText = styled(Title)`
  ${tw`h-[57px] text-color-white mt-[14px] px-[60px] sm:w-auto xl:(w-[159px])`}
`;

export const LinkText = styled.p`
  ${tw`h-[35px] w-[193px] font-medium text-16 leading-24 tracking-widest mt-[25px] text-color-white`}
`;
