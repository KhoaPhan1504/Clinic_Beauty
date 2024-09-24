import React from 'react';
import Slider2Component from './components/Slider2Component/Slider2Component';
import Header2Component from './components/Header2Component/Header2Component';
import About2Component from './components/About2Component/About2Component';
import Core2Component from './components/Core2Component/Core2Component';

const Home2:React.FC = () => {
  return (
    <>
      <Header2Component />
      <Slider2Component />
      <About2Component />
      <Core2Component />
    </>
  )
}

export default Home2;