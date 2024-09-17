import React from 'react';
import { FooterScroll } from './ScrollTop.style';
import scroll_logo from '../../assets/images/home1/ToTop Button.png';

const ScrollTopComponent:React.FC = () => {
  return (
    <FooterScroll>
      <img src={scroll_logo} alt="img" />
    </FooterScroll>
  )
}

export default ScrollTopComponent;