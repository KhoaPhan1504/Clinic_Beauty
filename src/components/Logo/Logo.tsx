import {
  BrandName,
  InsideIcon1,
  InsideIcon2,
  InsideIcon3,
  LogoContainer,
  LogoIcon,
} from './Logo.style';

export interface ILogoProps {
  type?: 'dark' | 'light';
  font?: 'bold' | 'medium';
  text?: 'default' | 'light';
}

export const Logo = ({
  type = 'dark',
  font = 'bold',
  text = 'default',
}: ILogoProps) => {
  return (
    <LogoContainer type={type}>
      <LogoIcon>
        <InsideIcon1 />
        <InsideIcon2 />
        <InsideIcon3 type={type} />
      </LogoIcon>
      <BrandName font={font} text={text}>
        Beautice
      </BrandName>
    </LogoContainer>
  );
};
