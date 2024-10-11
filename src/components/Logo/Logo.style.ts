import tw from 'twin.macro';
import styled from 'styled-components';

interface LogoContainerProps {
  type: 'dark' | 'light';
}

export const LogoContainer = styled.div<LogoContainerProps>(
  ({ type }: { type: 'dark' | 'light' }) => [
    tw`flex items-center gap-[34.4px] [filter:drop-shadow(0px 4px 0.5px #00000040)]`,
    type === 'dark' && tw`text-[color:var(--title-color)]`,
    type === 'light' && tw`text-[color:var(--white-color)]`,
  ],
);

export const LogoIcon = styled.div`
  ${tw`relative shrink-0 w-[63px] h-[63px] rounded-full bg-color-pink`}
`;

export const InsideIcon1 = styled.div`
  ${tw`absolute w-[13px] h-[13px] left-[12px] top-[11px] rounded-full bg-color-white`}
`;

export const InsideIcon2 = styled.div`
  ${tw`absolute w-[6px] h-[6px] left-[25px] top-[23px] rounded-full bg-color-white`}
`;

export const InsideIcon3 = styled.div<LogoContainerProps>(
  ({ type }: { type: 'dark' | 'light' }) => [
    tw`absolute right-0 top-[56%] h-[11px] w-[40px] -translate-y-[.6em] translate-x-[41%] rounded-[99px]`,
    type === 'dark' && tw`bg-color-title`,
    type === 'light' && tw`bg-color-white`,
  ],
);

export const BrandName = styled.span<{
  font: 'bold' | 'medium';
  text: 'default' | 'light';
}>`
  ${tw`hidden lg:inline text-24 leading-36 tracking-widest drop-shadow-2xl`}
  ${({ font }) =>
    font === 'bold'
      ? tw`font-bold text-color-title`
      : tw`font-normal text-24 text-color-white`}
  ${({ text }) =>
    text === 'default' ? tw` text-color-title` : tw`text-color-white`}
`;
