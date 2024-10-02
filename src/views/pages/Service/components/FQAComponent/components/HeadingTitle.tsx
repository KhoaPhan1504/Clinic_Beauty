import { ReactNode } from 'react';
import tw from 'twin.macro';
import clsx from 'clsx';
import styled from 'styled-components';

interface IHeadingTitleProps {
  children: ReactNode;
  className?: string;
}

const StyledHeadingTitle = styled.h2`
  ${tw`text-24 font-semibold leading-35 text-[#091156] md:text-36 md:leading-45 max-md:min-h-0`}
`;

const HeadingTitle = ({ children, className }: IHeadingTitleProps) => {
  return (
    <StyledHeadingTitle className={clsx(className)}>
      {children}
    </StyledHeadingTitle>
  );
};

export default HeadingTitle;
