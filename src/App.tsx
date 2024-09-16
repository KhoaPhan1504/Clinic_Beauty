import React from 'react';
import './App.css';
import HeaderComponent from './views/components/HeaderComponent/HeaderComponent';
import NavbarComponent from './views/components/NavbarComponent/NavbarComponent';
import SliderComponent from './views/layouts/SliderComponent/SliderComponent';
import CoreComponent from './views/layouts/CoreComponent/CoreComponent';
import AboutComponent from './views/layouts/AboutComponent/AboutComponent';
import ProfessionComponent from './views/layouts/ProfessionComponent/ProfessionComponent';


const App:React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <SliderComponent />
      <CoreComponent />
      <AboutComponent />
      <ProfessionComponent />
    </>
  )
}

export default App;