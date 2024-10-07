import React from 'react';
import Layout1Component from '../../layouts/Layout1Component';
import { contact } from '../../../data/Contact/contactData';
import Map from './components/MapComponent/Map';
import ContactComponent from './components/ContactComponent/Contact';
import InfoComponent from './components/InfoComponent/InfoComponent';

const Contact: React.FC = () => {
  return (
    <Layout1Component>
      <ContactComponent
        bgSr={contact.contactBG}
        imageSrc={contact.imageContact}
        tip="Contact Us"
        title="Contact service for our customers"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
      />
      <Map />
      <InfoComponent />
    </Layout1Component>
  );
};

export default Contact;
