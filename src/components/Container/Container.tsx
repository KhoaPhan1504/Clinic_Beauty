import clsx from 'clsx';
import { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledContainer = styled.div`
  ${tw`container`}
`;

const Container = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <StyledContainer className={clsx(className)}>{children}</StyledContainer>
  );
};

export default Container;
