import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`min-h-screen flex justify-center items-center bg-color-default`}
`;

export const Wrapper = styled.div`
  ${tw`text-center`}
`;

export const Title = styled.h1`
  ${tw`text-[128px] font-bold text-color-border`}
`;

export const Description = styled.p`
  ${tw`text-[20px] text-color-border mb-8`}
`;

export const SVGWrapper = styled.div`
  ${tw`flex justify-center mt-4`}
`;

export const SVG = styled.svg`
  ${tw`stroke-color-white text-color-border`}
`;
