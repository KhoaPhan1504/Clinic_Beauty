import React from 'react';
import Layout1Component from '../../layouts/components/Layout1Component/Layout1Component';
import AboutComponent from './components/AboutComponent/AboutComponent';
import ImageAbout from '../../../assets/images/about/About 1.png';
import ProfessionComponent from '../Home/Home1/components/ProfessionComponent/ProfessionComponent';
import Profession from '../../../assets/images/about/Bubble_BG_Right.png';
import SloganComponent from './components/SloganComponent/SloganComponent';
import VisionComponent from './components/VisionComponent/VisionComponent';
import MissionComponent from './components/MissionComponent/MissionComponent';
import ClientComponent from './components/ClientComponent/ClientComponent';

const About: React.FC = () => {
  return (
    <Layout1Component>
      <AboutComponent
        tipText="About"
        titleText="We are a leading beauty clinic that has been around since 2002"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        imageSrc={ImageAbout}
        imageAlt="Image about"
      />
      <ProfessionComponent
        bgSrc={Profession}
        classNameBG="right-0 md:translate-y-0 xl:translate-y-[-519px]"
        tipText="Professional Teams"
        titleText="The Professional expert"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        className="mt-[133px]"
      />
      <SloganComponent />
      <VisionComponent />
      <MissionComponent />
      <ClientComponent />
    </Layout1Component>
  );
};

export default About;
