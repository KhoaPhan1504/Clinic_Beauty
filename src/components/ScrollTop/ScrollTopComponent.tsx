import React, { useEffect, useState } from 'react';
import { FooterScroll } from './ScrollTop.style';
import scroll_logo from '../../assets/images/home1/ToTop Button.png';

const ScrollTopComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  const toggleVisibility = () => {
    const scrollY = window.pageYOffset;
    const footerElement = document.querySelector('footer');

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (footerElement) {
      const footerPosition =
        footerElement.getBoundingClientRect().top + window.scrollY;
      if (window.innerHeight + scrollY >= footerPosition - 100) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
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
      style={{
        display: isVisible ? 'block' : 'none',
        position: isNearFooter ? 'relative' : 'fixed',
        bottom: isNearFooter ? '157px' : '158px',
      }}
    >
      <img src={scroll_logo} alt="Scroll To Top" />
    </FooterScroll>
  );
};

export default ScrollTopComponent;
