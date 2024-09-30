import Slider2Component from './components/Slider2Component/Slider2Component';
import About2Component from './components/About2Component/About2Component';
import Core2Component from './components/Core2Component/Core2Component';
import Layout2Component from '../../../layouts/components/Layout2Component/Layout2Component';
import WhyChooseComponent from './components/StatsComponent/StatsComponent';
import BlogComponent from './components/BlogComponent/BlogComponent';

const Home2 = () => {
  return (
    <Layout2Component>
      <Slider2Component />
      <About2Component />
      <Core2Component />
      <WhyChooseComponent />
      <BlogComponent />
    </Layout2Component>
  );
};

export default Home2;
