import React from 'react';
import Layout1Component from '../../layouts/components/Layout1Component/Layout1Component';
import ServiceComponent from './components/ServiceComponent/ServiceComponent';
import { SvInfor } from '../../../data/ComponentData/Images';
import TreatementComponent from './components/TreatementComponent/TreatementComponent';
import ServiceInfoComponent from './components/ServiceInfoComponent/ServiceInfoComponent';
import SloganSvComponent from './components/SloganSvComponent/SloganSvComponent';
import FQAComponent from './components/FQAComponent/FAQComponent';

const Service: React.FC = () => {
  return (
    <Layout1Component>
      <ServiceComponent />
      <ServiceInfoComponent
        imageSrc={SvInfor.SvInfor1}
        imageAlt="Service Infor 1"
        tipText="Beauty Consultation"
        titleText="We services beauty consultation"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
      />
      <TreatementComponent
        imageSrc={SvInfor.SvInfor2}
        imageAlt="Service Infor 2"
        tipText="Skin Treatements"
        titleText="Skin care and treatment by expert"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
      />
      <ServiceInfoComponent
        className="mt-[42px]"
        imageSrc={SvInfor.SvInfor3}
        imageAlt="Service Infor 3"
        tipText="Beauty Product"
        titleText="We present quality beauty products"
        describeText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
      />
      <SloganSvComponent />
      <FQAComponent />
    </Layout1Component>
  );
};

export default Service;
