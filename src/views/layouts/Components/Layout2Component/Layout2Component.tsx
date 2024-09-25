import React from 'react';
import HeaderComponent from './../HeaderComponent/HeaderComponent';
import FooterComponent from './../FooterComponent/FooterComponent';
import Logo_Header_White from '../../../../assets/images/home1/Logo_White.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout2Component: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent
        logo={Logo_Header_White}
        menuColor="#FFFFFF"
        activeMenuColor="#FFFFFF"
      />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout2Component;
