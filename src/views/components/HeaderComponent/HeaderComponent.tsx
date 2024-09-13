import React from 'react';
import Logo_Header from '../../../assets/images/home1/Main Logo Header.png'
import { 
  Header, HeaderWrapper, WrapperImage, WrapperImageStyle,
  HeaderMore,HeaderMenu, HeaderMenuChildren,
  MenuItem, MenuLink,
  HeaderContact
} from './Header.style';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <HeaderWrapper>
        
        <WrapperImage>
          <WrapperImageStyle src={Logo_Header} alt='Beautice - Clinic & Beauty'/>
        </WrapperImage>
        <HeaderMore>
          <HeaderMenu>
            <HeaderMenuChildren>
              <MenuItem className="_menuItem"><MenuLink className="active" href="#">Home +</MenuLink></MenuItem>
              <MenuItem className="_menuItem"><MenuLink href="#">About</MenuLink></MenuItem>
              <MenuItem className="_menuItem"><MenuLink href="#">Service</MenuLink></MenuItem>
              <MenuItem className="_menuItem"><MenuLink href="#">Gallery</MenuLink></MenuItem>
              <MenuItem className="_menuItem"><MenuLink href="#">Blog</MenuLink></MenuItem>
            </HeaderMenuChildren>
          </HeaderMenu>
          <HeaderContact>
	          <ButtonComponent
              textButton='Contact' 
              className='w-[158px] h-[52px]'
            />
	        </HeaderContact>
        </HeaderMore>
      </HeaderWrapper>
    </Header>
  )
}

export default HeaderComponent;