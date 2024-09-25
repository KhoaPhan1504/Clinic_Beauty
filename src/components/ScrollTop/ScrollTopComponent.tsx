import React, { useEffect, useState } from 'react';
import { FooterScroll } from './ScrollTop.style';
import scroll_logo from '../../assets/images/home1/ToTop Button.png';

const ScrollTopComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <FooterScroll
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <img src={scroll_logo} alt="Scroll To Top" />
    </FooterScroll>
  );
};

export default ScrollTopComponent;
