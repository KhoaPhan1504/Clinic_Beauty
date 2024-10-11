import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout2Component: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent
        logo={{ font: 'medium', type: 'light', text: 'light' }}
        menuColor="#FFFFFF"
        activeMenuColor="#FFFFFF"
      />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout2Component;
