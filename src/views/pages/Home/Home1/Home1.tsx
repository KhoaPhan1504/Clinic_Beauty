import Layout1Component from '../../../layouts/components/Layout1Component/Layout1Component';
import AboutComponent from './components/AboutComponent/AboutComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import CoreComponent from './components/CoreComponent/CoreComponent';
import ProfessionComponent from './components/ProfessionComponent/ProfessionComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';

const Home1 = () => {
  return (
    <Layout1Component>
      <SliderComponent />
      <CoreComponent />
      <AboutComponent />
      <ProfessionComponent />
      <ContactComponent />
    </Layout1Component>
  );
};

export default Home1;
