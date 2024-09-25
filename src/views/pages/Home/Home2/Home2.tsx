import React from 'react';
import Slider2Component from './components/Slider2Component/Slider2Component';
import About2Component from './components/About2Component/About2Component';
import Core2Component from './components/Core2Component/Core2Component';
import Layout2Component from '../../../layouts/Components/Layout2Component';

const Home2:React.FC = () => {
  return (
    <Layout2Component>
      <Slider2Component />
      <About2Component />
      <Core2Component />
    </Layout2Component>
  )
}

export default Home2;