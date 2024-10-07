import Layout1Component from '../../../layouts/Layout1Component';
import AboutComponent from './components/AboutComponent/AboutComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import CoreComponent from './components/CoreComponent/CoreComponent';
import ProfessionComponent from './components/ProfessionComponent/ProfessionComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';
import { Images } from '../../../../data/ComponentData/Images';

const Home1 = () => {
  return (
    <Layout1Component>
      <SliderComponent />
      <CoreComponent />
      <AboutComponent />
      <ProfessionComponent
        tipText="Professional Teams"
        titleText="The Professional expert"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <ContactComponent
        bgSr={Images.contactBG}
        imageSrc={Images.contactImg}
        tip="Contact Us"
        title="Send your inquiry to our expert team"
        des="Lorem ipsum dolor sit amet nulla turapis tellus."
      />
    </Layout1Component>
  );
};

export default Home1;
