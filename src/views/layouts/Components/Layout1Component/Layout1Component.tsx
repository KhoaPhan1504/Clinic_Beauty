import React from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent';
import FooterComponent from './../FooterComponent/FooterComponent';
import Logo_Header_Blue from '../../../../assets/images/home1/Logo_Blue.png';

interface LayoutProps {
  children: React.ReactNode;
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
