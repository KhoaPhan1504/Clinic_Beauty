import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFAQContent = styled.p`
  ${tw`flex min-h-0 flex-col gap-[21px] text-14 font-normal italic leading-21 tracking-widest text-color-default md:min-h-[111px]`}
`;

const FAQContent = forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>((props, ref) => <StyledFAQContent ref={ref} {...props} />);

export default FAQContent;