import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout1Component: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout1Component;
