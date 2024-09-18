import React from 'react'
import { 
  Button,
  Slider, SliderBtn, SliderBtnActive, SliderButton, SliderButtonGroup, SliderImage, SliderMainChild, 
  SliderMainDescribe, SliderMainTitle, SliderWrapper, 
  SliderWrapperImage, 
  SliderWrapperText,
} from './Slider.style';
import Slider_Image from '../../../../assets/images/home1/Slider.svg';

const SliderComponent:React.FC = () => {
  return (
    <Slider>
      <SliderWrapper>
				<SliderWrapperText>
					<SliderMainChild>
						<SliderMainTitle>Clinic & beauty consultant</SliderMainTitle>
						<SliderMainDescribe>It is a long established fact that a reader will be by the readable content of a page.</SliderMainDescribe>
						<SliderButton>
							<Button 
                textButton='More Details'
              />
						</SliderButton>
					</SliderMainChild>
				</SliderWrapperText>
				<SliderWrapperImage>
					<SliderImage src={Slider_Image} alt="Slider Images" />
				</SliderWrapperImage>
			</SliderWrapper>
			<SliderButtonGroup>
				<SliderBtn textButton=''/>
				<SliderBtnActive  textButton=''/>
				<SliderBtn textButton=''/>
			</SliderButtonGroup>
    </Slider>
  )
}

export default SliderComponent