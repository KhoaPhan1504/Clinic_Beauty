import React from 'react';
import contact_image from "../../../../assets/images/home1/Contact.svg"
import { 
  Contact, ContactBackground, ContactDescribe, ContactFormInfo, 
	ContactFormWrapper, ContactImage, 
  ContactImageItem, ContactImageWrapper, 
  ContactMain, ContactMainForm, ContactMainFormItem, 
	ContactTip, ContactTitle, ContactTitleDesc, ContactWrapper 
} from './Contact.style';
import { 
	ContactColInput, ContactRowname, 
	FormButton, FormControl, 
	FormGroup, TextArea 
} from '../../../../components/Form/Form.style';
import { Images } from '../../../../data/ComponentData/Images';

const ContactComponent:React.FC = () => {
  return (
    <Contact>
			<ContactBackground src={Images.contactBG} alt='Background Contact' />
			<ContactWrapper>
				<ContactMain>
					<ContactImageWrapper>
						<ContactImage>
							<ContactImageItem src={contact_image} />
						</ContactImage>
					</ContactImageWrapper>
					<ContactMainForm>
						<ContactFormWrapper>
							<ContactFormInfo>
								<ContactTitleDesc>
									<ContactTip>Contact Us</ContactTip>
									<ContactTitle>Send your inquiry to our expert team</ContactTitle>
									<ContactDescribe>Lorem ipsum dolor sit amet nulla turapis tellus.</ContactDescribe>
								</ContactTitleDesc>
							</ContactFormInfo>
							<ContactMainFormItem>
								<FormGroup>
									<ContactRowname>
										<ContactColInput>
                      <FormControl 
                        type='text'
                        required
                        placeholder='First name'
                        className='contact_name pl-[23px]'
                      />
										</ContactColInput>
										<ContactColInput>
                      <FormControl 
                        type='text'
                        required
                        placeholder='Last name'
                        className='contact_name pl-[27px]'
                      />
										</ContactColInput>
									</ContactRowname>
								</FormGroup>
								<FormGroup>
									<FormControl 
										type='text'
										required
										placeholder='Email address'
										className='contact_input pl-[23px]'
									/>
								</FormGroup>
								<FormGroup>
									<FormControl 
										type='text'
										required
										placeholder='Subject message'
										className='contact_input pl-[23px]'
									/>
								</FormGroup>
								<FormGroup>
									<TextArea className="form_control pl-[23px]" placeholder="Your inquiry here" />
								</FormGroup>
								<FormGroup>
									<FormButton textButton='Send Message' />
								</FormGroup>
							</ContactMainFormItem>
						</ContactFormWrapper>	
					</ContactMainForm>
				</ContactMain>
			</ContactWrapper>
		</Contact>
  )
}

export default ContactComponent;