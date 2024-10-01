import Slider2Component from './components/Slider2Component/Slider2Component';
import About2Component from './components/About2Component/About2Component';
import Core2Component from './components/Core2Component/Core2Component';
import Layout2Component from '../../../layouts/components/Layout2Component/Layout2Component';
import WhyChooseComponent from './components/StatsComponent/StatsComponent';
import BlogComponent from './components/BlogComponent/BlogComponent';
import Contact2Component from './components/Contact2Component/Contact2Component';
import ImageAbout from '../../../../assets/images/home2/About_2.png';

const Home2 = () => {
  return (
    <Layout2Component>
      <Slider2Component />
      <About2Component
        tipText="About Us"
        titleText="We are the best beauty clinic"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
        imageSrc={ImageAbout}
        imageAlt="About 2 Image"
        textButton="Learn More"
      />
      <Core2Component />
      <WhyChooseComponent />
      <BlogComponent />
      <Contact2Component />
    </Layout2Component>
  );
};

export default Home2;
