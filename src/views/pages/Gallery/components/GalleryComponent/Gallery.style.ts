import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Describe,
  Tip,
  Title,
} from '../../../../../components/Content/Text.style';

export const Gallery = styled.section`
  ${tw`mt-[126px] px-[150px] 2xl:px-[400px]`}
`;

export const Container = styled.div`
  ${tw`container`}
`;

export const GalleryWrapperText = styled.div`
  ${tw`flex flex-col items-center justify-between pr-[20px] text-center x:(items-start flex-row text-start)`}
`;

export const GalleryTitle = styled.div`
  ${tw`flex flex-col gap-3 sm:items-center xl:items-start`}
`;

export const TipText = styled(Tip)`
  ${tw`w-[92px] h-[20px]`}
`;

export const TitleText = styled(Title)`
  ${tw`w-[615px] h-[104px] lg:(min-h-[104px] max-w-[615px])`}
`;

export const DescribeText = styled(Describe)`
  ${tw`w-[407px] h-[72px] mt-[32px]`}
`;

export const GalleryDesc = styled.p`
  ${tw`font-normal text-16 leading-24 tracking-widest text-color-default translate-y-[.5px]  lg:(mt-[66px] text-left max-w-[660px])`}
`;

export const Strong = styled.span`
  ${tw`font-semibold text-16 leading-24 tracking-widest text-color-title`}
`;

export const Image = styled.img`
  ${tw`absolute inset-0 h-full w-full object-cover`}
`;

export const ImageList = styled.div`
  ${tw`mt-[75px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[38px_36px]`}
`;

export const ImageWrapper = styled.figure<{
  hiddenOnMobile?: boolean;
  hiddenOnTablet?: boolean;
}>`
  ${tw`relative overflow-hidden rounded-[20px] bg-color-default pt-[58.98%]`}
  ${({ hiddenOnMobile }) => hiddenOnMobile && tw`hidden sm:block`}
  ${({ hiddenOnTablet }) => hiddenOnTablet && tw`hidden lg:block`}
`;
