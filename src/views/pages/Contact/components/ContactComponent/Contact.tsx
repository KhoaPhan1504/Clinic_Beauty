import React from 'react';
import {
  Contact,
  ContactBackground,
  ContactDescribe,
  ContactFormContainer,
  ContactFormInfo,
  ContactFormWrapper,
  ContactImageItem,
  ContactImageWrapper,
  ContactMain,
  ContactMainForm,
  ContactMainFormItem,
  ContactTip,
  ContactTitle,
  ContactTitleDesc,
  ContactWrapper,
  WrapperDescribe,
} from './Contact.style';
import {
  ContactColInput,
  ContactRowname,
  FormButton,
  FormControl,
  FormGroup,
  TextArea,
} from '../../../../../components/Form/Form.style';

interface ContactProps {
  bgSr?: string;
  imageSrc?: string;
  tip?: string;
  title?: string;
  des?: string;
}

const ContactComponent: React.FC<ContactProps> = ({
  bgSr,
  tip,
  title,
  des,
  imageSrc,
}) => {
  return (
    <Contact>
      <ContactBackground src={bgSr} alt="Background Contact" />
      <ContactWrapper>
        <ContactMain>
          <ContactFormInfo>
            <ContactTitleDesc>
              <ContactTip>{tip}</ContactTip>
              <ContactTitle>{title}</ContactTitle>
            </ContactTitleDesc>
            <WrapperDescribe>
              <ContactDescribe>{des}</ContactDescribe>
            </WrapperDescribe>
          </ContactFormInfo>
          <ContactFormContainer>
            <ContactImageWrapper>
              <ContactImageItem src={imageSrc} />
            </ContactImageWrapper>
            <ContactMainForm>
              <ContactFormWrapper>
                <ContactMainFormItem>
                  <FormGroup>
                    <ContactRowname>
                      <ContactColInput>
                        <FormControl
                          type="text"
                          required
                          placeholder="First name"
                          className="contact_name pl-[23px]"
                        />
                      </ContactColInput>
                      <ContactColInput>
                        <FormControl
                          type="text"
                          required
                          placeholder="Last name"
                          className="contact_name pl-[27px]"
                        />
                      </ContactColInput>
                    </ContactRowname>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="text"
                      required
                      placeholder="Email address"
                      className="contact_input pl-[23px]"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="text"
                      required
                      placeholder="Subject message"
                      className="contact_input pl-[23px]"
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextArea
                      className="form_control pl-[23px]"
                      placeholder="Your inquiry here"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormButton textButton="Send Message" />
                  </FormGroup>
                </ContactMainFormItem>
              </ContactFormWrapper>
            </ContactMainForm>
          </ContactFormContainer>
        </ContactMain>
      </ContactWrapper>
    </Contact>
  );
};

export default ContactComponent;
