import React from 'react';
import {
  Contact,
  ContactDescribe,
  ContactForm,
  ContactTitle,
  ContactToll,
  ContactUs,
  ContactWrapper,
  ContactWrapperForm,
  ContactWrapperText,
  FormButton,
  FormInput,
} from './Contact2.style';
import IconBtn from '../../../../../../assets/images/home2/phone-volume.png';

const Contact2Component: React.FC = () => {
  return (
    <Contact>
      <ContactWrapper>
        <ContactWrapperText>
          <ContactTitle>Request call services</ContactTitle>
          <ContactDescribe>
            Lorem ipsum dolor sit amet, consect adipiscing elit{' '}
            <ContactUs>Contact Us</ContactUs> .
          </ContactDescribe>
        </ContactWrapperText>
        <ContactWrapperForm>
          <ContactForm>
            <FormInput placeholder="Insert your phone number here ..." />
            <FormButton icon={IconBtn} />
          </ContactForm>
          <ContactToll>Toll free for our coverage areas.</ContactToll>
        </ContactWrapperForm>
      </ContactWrapper>
    </Contact>
  );
};

export default Contact2Component;
