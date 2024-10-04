import React from 'react';
// import ProfessionComponent from '../Home/Home1/components/ProfessionComponent/ProfessionComponent';
import TeamBG from '../../../assets/images/team/Bubble BG.png';
import OurComponent from './components/OurComponent/OurComponent';
import AssistanceComponent from './components/AssistanceComponent/AssistanceComponent';
import SloganComponent from './components/SloganComponent/SloganComponent';
import TestimonialComponent from './components/TestimonialComponent/TestimonialComponent';
import Layout1Component from '../../layouts/Layout1Component';

const Team: React.FC = () => {
  return (
    <Layout1Component>
      <OurComponent
        bgSrc={TeamBG}
        classNameBG="right-0 md:translate-y-0 xl:translate-y-[2px]"
        tipText="Our Team"
        titleText="We are Professional"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <AssistanceComponent />
      <SloganComponent />
      <TestimonialComponent />
    </Layout1Component>
  );
};

export default Team;
