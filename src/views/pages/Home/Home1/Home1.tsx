import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import SliderComponent from '../../../layouts/Components/SliderComponent/SliderComponent';
import CoreComponent from '../../../layouts/Components/CoreComponent/CoreComponent';
import AboutComponent from '../../../layouts/Components/AboutComponent/AboutComponent';
import ProfessionComponent from '../../../layouts/Components/ProfessionComponent/ProfessionComponent';
import ContactComponent from '../../../layouts/Components/ContactComponent/ContactComponent';

const Home1 = () => {
  return (
    <>
      <HeaderComponent />   
      <SliderComponent />
      <CoreComponent />
      <AboutComponent />
      <ProfessionComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  )
}

export default Home1;