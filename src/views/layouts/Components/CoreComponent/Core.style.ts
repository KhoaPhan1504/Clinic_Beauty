import tw from "twin.macro";
import styled from "styled-components";
import { Card } from "../../../../components/Card/Card.style";

export const Core = styled.div `
  ${tw`w-screen max-w-1140 h-[732px] rounded-[42px] text-center`}
  ${tw`md:(mx-auto mt-[300px])`}
  ${tw`lg:(mt-[300px] ) xl:(mt-[193px])`}
`;

export const CoreWrapper = styled.div `
  ${tw`w-full h-auto flex flex-col items-center`}
`;

export const TitleDesc = styled.div `
  ${tw`w-full max-w-[848px] flex flex-col items-center`}
  ${tw`md:(max-w-[700px] text-center) lg:(max-w-[600px]) xl:(max-w-[550px])`}
`;

export const InfoTip = styled.span `
  ${tw`w-auto h-[20px] leading-20 text-center text-color-pink font-semibold text-16`}
`;

export const InfoTitle = styled.h2 `
  ${tw`max-w-[417px] h-[97px] leading-[45px] text-center pt-[12px] text-color-title font-semibold text-36`}
  ${tw`md:(leading-[40px]) lg:(leading-[42px]) xl:(leading-[44px])`}
`;

export const InfoDescribe = styled.p `
  ${tw`w-full max-w-[848px] h-[51px] leading-24 tracking-widest text-center pt-6 text-color-default font-normal text-16`}
  ${tw`md:(max-w-[700px]) lg:(max-w-[600px]) xl:(max-w-[550px])`}
`;

export const CoreItem = styled.div `
  ${tw`w-full mt-[11px]`}
`;

export const CoreCol = styled.div `
  ${tw`flex justify-between items-center w-full my-[20px] md:(flex-wrap justify-center)`}
  ${tw`md:(flex-wrap justify-center)`}
  ${tw`lg:(justify-around)`}
`

export const CoreItemCard = styled(Card) `
  ${tw`flex justify-center items-center w-[343px] h-[458px]`}
  transition: all 0.7s ease;

  &:hover {
    ${tw`translate-y-[10px]`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ${tw`md:(w-[300px] h-[400px]) lg:(w-[320px] h-[420px]) xl:(w-[340px] h-[458px])`}
`;

