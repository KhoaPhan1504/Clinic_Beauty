import React from 'react';
import Logo_Header_White from '../../assets/images/home1/Logo_White.png';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

interface LayoutProps {
  children?: React.ReactNode;
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
