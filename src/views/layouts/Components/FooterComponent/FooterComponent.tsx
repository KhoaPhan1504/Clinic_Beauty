import React from 'react';
import {
  Footer,
  FooterBottom,
  FooterCertification,
  FooterCol,
  FooterColumn,
  FooterContainer,
  FooterContainerFluid,
  FooterGroupIcon,
  FooterIcon,
  FooterInfo,
  FooterInfoAddress,
  FooterInfoContact,
  FooterInfoDescibe,
  FooterInfoDescibes,
  FooterInfoDescibeWrap,
  FooterInfoEmail,
  FooterInfoEmailItem,
  FooterInfoLogo,
  FooterInfoPhone,
  FooterInternet,
  FooterMore,
  FooterMoreChildrenItems,
  FooterMoreInformation,
  FooterMoreItem,
  FooterMorePage,
  FooterMoreTitle,
  FooterWrapper,
  IconImg,
  IconLinkMenu,
} from './Footer.style';
import fb_logo from '../../../../assets/images/home1/facebook-f.png';
import tw_logo from '../../../../assets/images/home1/twitter (1).png';
import lin_logo from '../../../../assets/images/home1/linkedin-in.png';
import you_logo from '../../../../assets/images/home1/youtube.png';
import insta_logo from '../../../../assets/images/home1/instagram (1).png';
import ScrollTopComponent from '../../../../components/ScrollTop/ScrollTopComponent';
import { Logo } from '../../../../components/Logo/Logo';
import caretRight from '../../../../assets/images/home1/caretRight.png';

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <FooterWrapper>
        <FooterContainerFluid>
          <FooterContainer>
            <FooterColumn>
              <FooterCol>
                <FooterInfo>
                  <FooterInfoLogo>
                    <Logo type="light" text="light" />
                  </FooterInfoLogo>
                  <FooterInfoDescibes>
                    <FooterInfoDescibeWrap>
                      <FooterInfoDescibe>Beautice</FooterInfoDescibe> is a
                      Beauty Clinic WordPress Theme.
                    </FooterInfoDescibeWrap>
                    <br />
                    <FooterInfoAddress>
                      <i>Baker Steet 101, NY, United States.</i>
                    </FooterInfoAddress>
                    <FooterInfoContact>
                      <FooterInfoPhone>
                        <i>+521 569 8966.</i>
                      </FooterInfoPhone>
                      <FooterInfoEmail>
                        <FooterInfoEmailItem href="mailto:mail@company.com">
                          mail@company.com.
                        </FooterInfoEmailItem>
                      </FooterInfoEmail>
                    </FooterInfoContact>
                  </FooterInfoDescibes>
                </FooterInfo>
              </FooterCol>
              <FooterCol>
                <FooterMore>
                  <FooterMorePage>
                    <FooterMoreTitle>Pages</FooterMoreTitle>
                    <FooterMoreChildrenItems>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Home
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> About
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Services
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Gallery
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Team
                      </FooterMoreItem>
                    </FooterMoreChildrenItems>
                  </FooterMorePage>
                  <FooterMoreInformation>
                    <FooterMoreTitle>Informations</FooterMoreTitle>
                    <FooterMoreChildrenItems>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Terms & conditions
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Privacy policy
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Blog
                      </FooterMoreItem>
                      <FooterMoreItem>
                        <IconLinkMenu src={caretRight} /> Contact
                      </FooterMoreItem>
                    </FooterMoreChildrenItems>
                  </FooterMoreInformation>
                </FooterMore>
              </FooterCol>
            </FooterColumn>
            <FooterBottom>
              <FooterCol>
                <FooterInternet>
                  <FooterGroupIcon>
                    <FooterIcon>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/bachasoftware"
                      >
                        <IconImg src={fb_logo} alt="" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a
                        target="_blank"
                        href="https://x.com/i/flow/login?redirect_after_login=%2FBacHaSoftware"
                      >
                        <IconImg src={tw_logo} alt="" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/bac-ha-software/"
                      >
                        <IconImg src={lin_logo} alt="" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a target="_blank" href="https://www.youtube.com/@bhsoft">
                        <IconImg src={you_logo} alt="" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a target="_blank" href="">
                        <IconImg src={insta_logo} alt="" />
                      </a>
                    </FooterIcon>
                  </FooterGroupIcon>
                </FooterInternet>
              </FooterCol>
              <FooterCol>
                <FooterCertification>
                  © AltDesain Studio 2021 - All right reserved.
                </FooterCertification>
              </FooterCol>
            </FooterBottom>
          </FooterContainer>
        </FooterContainerFluid>
        <ScrollTopComponent />
      </FooterWrapper>
    </Footer>
  );
};

export default FooterComponent;
