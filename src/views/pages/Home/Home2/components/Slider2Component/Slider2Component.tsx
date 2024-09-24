import React from 'react';
import { 
  Slider, SliderButton, SliderButtonImage, 
  SliderButtonText, SliderDescribe, SliderMainText, SliderTitle, 
  SliderWrapper, SliderWrapperButton, SliderWrapperText  
} from './Slider2.style';
import Logo_Play from '../../../../../../assets/images/home2/Play_Home_2.png';

const Slider2Component:React.FC = () => {
  return (
    <Slider>
      <SliderWrapper>
        <SliderWrapperText>
          <SliderMainText>
            <SliderTitle>Your beauty center place</SliderTitle>
            <SliderDescribe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</SliderDescribe>
            <SliderButton textButton='More Details' />
          </SliderMainText>
        </SliderWrapperText>
        <SliderWrapperButton>
          <SliderButtonImage src={Logo_Play} />
          <SliderButtonText>Tour Video</SliderButtonText>
        </SliderWrapperButton>
      </SliderWrapper>
    </Slider>
  )
}

export default Slider2Component;