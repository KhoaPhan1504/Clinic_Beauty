import tw from 'twin.macro';
import styled from 'styled-components';
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export interface FAQItemProps {
  title: string;
  defaultOpen?: boolean;
  children: (props: { ref: MutableRefObject<HTMLElement | null> }) => ReactNode;
  className?: string;
}

const FAQItemWrapper = styled.div`
  ${tw`flex w-full flex-col`}
`;

const FAQItemHeader = styled.div<{ isOpen: boolean }>`
  ${tw`flex cursor-pointer items-center justify-between pl-[35px] pr-[19.5px] transition-[background-color,padding-bottom] hover:bg-[#fefefe] lg:items-start`}
  ${({ isOpen }) => isOpen && tw`pb-[13.8px]`}
`;

const FAQItemTitle = styled.h4`
  ${tw`font-semibold leading-24 tracking-widest text-color-title`}
`;

const FAQItemIcon = styled(FontAwesomeIcon)<{ isOpen: boolean }>`
  ${tw`transition-transform duration-500`}
  ${({ isOpen }) => (isOpen ? tw`rotate-0` : tw`translate-y-[-1px] rotate-180`)}
`;

const FAQItemDivider = styled.div<{ isOpen: boolean }>`
  ${tw`h-[1px] w-0 bg-[#091156] transition-[width] duration-500`}
  ${({ isOpen }) => isOpen && tw`!w-full`}
`;

const FAQItemContent = styled.div<{ isOpen: boolean; contentHeight: number }>`
  ${tw`overflow-y-scroll md:overflow-hidden rounded-ee-[20px] rounded-es-[20px] bg-[#F6F7FF] transition-[height,padding] duration-500`}
  ${({ isOpen, contentHeight }) =>
    isOpen
      ? `
      padding: 30px 30px 30px 40px;
      @media (min-width: 768px) {
        padding: 52px 63px 53px 76px;
      }
      height: ${contentHeight + 52 + 53}px;
    `
      : `
      padding: 0 30px 0 40px;
      @media (min-width: 768px) {
        padding: 0 63px 0 76px;
      }
      height: 0;
    `}
`;

const FAQItem = ({ title, defaultOpen, children, className }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef.current]);

  return (
    <FAQItemWrapper className={clsx(className)}>
      <FAQItemHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <FAQItemTitle>{title}</FAQItemTitle>
        <FAQItemIcon icon={faAngleUp} isOpen={isOpen} />
      </FAQItemHeader>
      <FAQItemDivider isOpen={isOpen} />
      <FAQItemContent isOpen={isOpen} contentHeight={contentHeight}>
        {children({ ref: contentRef })}
      </FAQItemContent>
    </FAQItemWrapper>
  );
};

export default FAQItem;
