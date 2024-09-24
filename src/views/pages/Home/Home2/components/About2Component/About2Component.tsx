import React from 'react';
import { 
  About, AboutButton, AboutDescribe, 
  AboutImage, AboutTip, AboutTitle, 
  AboutWrapper, AboutWrapperImage, AboutWrapperText 
} from './About2.style';
import About2_Image from '../../../../../../assets/images/home2/About_2.png'

const About2Component:React.FC = () => {
  return (
    <About>
      <AboutWrapper>
        <AboutWrapperImage>
          <AboutImage src={About2_Image} alt='About 2 Image'/>
        </AboutWrapperImage>
        <AboutWrapperText>
          <AboutTip>About Us</AboutTip>
          <AboutTitle>We are the best beauty clinic</AboutTitle>
          <AboutDescribe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</AboutDescribe>
          <AboutButton textButton='Learn More' />
        </AboutWrapperText>
      </AboutWrapper>
    </About>
  )
}

export default About2Component;