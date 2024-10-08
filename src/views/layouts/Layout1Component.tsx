import React from 'react';
import Logo_Header_Blue from '../../assets/images/home1/Logo_Blue.png';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout1Component: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent logo={Logo_Header_Blue} />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout1Component;
