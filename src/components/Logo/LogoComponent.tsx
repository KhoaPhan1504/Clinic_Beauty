import React from 'react';
import { LogoImage } from './Logo.style';

interface LogoProps {
  linkLogo: string;
  altLogo: string;
}

const LogoComponent: React.FC<LogoProps> = ({ linkLogo, altLogo }) => {
  return <LogoImage className="ml-[-2px]" src={linkLogo} alt={altLogo} />;
};

export default LogoComponent;
