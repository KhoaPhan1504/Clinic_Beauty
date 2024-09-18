
import { 
  About, AboutBackground, AboutBtnGroup, AboutBtnLeft, AboutBtnRight, AboutContainer, 
  AboutContainerImage, 
  AboutContainerText, AboutDescribe, 
  AboutImg, 
  AboutTip, AboutTitle, 
  AboutTitleDesc, AboutWatch, AboutWatchImg, AboutWatchText, AboutWrapper, 
  BtnLearnMore
} from './About.style';
import WatchVideo from '../../../../assets/images/home1/AboutWatch.svg';
import AboutImage from '../../../../assets/images/home1/Image_About.png';
import about_bg from '../../../../assets/images/home1/Background Bubble.png'

const AboutComponent = () => {
  return (
    <About>
			<AboutBackground src={about_bg} alt='Background About'/>
			<AboutWrapper>
				<AboutContainer>
					<AboutContainerText>
						<AboutTitleDesc>
							<AboutTip>About Us</AboutTip>
							<AboutTitle>We are the best beauty clinic</AboutTitle>
							<AboutDescribe>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
								<br/><br/>
								Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
							</AboutDescribe>
							<AboutBtnGroup>
								<AboutBtnLeft>
									<BtnLearnMore textButton='Learn More' />
								</AboutBtnLeft>
								<AboutBtnRight>
									<AboutWatch>
										<AboutWatchImg src={WatchVideo} alt="Watch Video" />
										<AboutWatchText>Watch Video</AboutWatchText>
									</AboutWatch>
								</AboutBtnRight>
							</AboutBtnGroup>
						</AboutTitleDesc>
					</AboutContainerText>
					<AboutContainerImage>
						<AboutImg src={AboutImage} alt="Image_about" />
					</AboutContainerImage>
				</AboutContainer>
			</AboutWrapper>
		</About>
  )
}

export default AboutComponent;