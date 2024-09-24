import React, { useEffect, useRef, useState } from 'react';
import Logo_Header_Blue from '../../../assets/images/home1/Logo_Blue.png'
import { 
  Header, HeaderWrapper, WrapperImage,
  HeaderMore,HeaderMenu, HeaderMenuChildren,
  MenuItem, MenuLink,
  HeaderContact,
} from './Header.style';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { MobileMenuButton, NavbarIcon } from '../NavbarComponent/Navbar.style';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import LogoComponent from '../../../components/Logo/LogoComponent';

const HeaderComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); 
  const menuRef = useRef<HTMLDivElement>(null);
  const altLogo = 'Beautice - Clinic & Beauty';

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    if(window.innerWidth <= 1140) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize' , handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Header>
      <HeaderWrapper>
        <WrapperImage>
          <LogoComponent linkLogo={Logo_Header_Blue} altLogo={altLogo} />
        </WrapperImage>
        {isMobile ? (
          <>
            <MobileMenuButton onClick={toggleMenu}>
              {menuOpen ? <NavbarIcon icon={faBars} /> : <NavbarIcon icon={faBars}/>}
            </MobileMenuButton>
            {menuOpen && (
              <div ref={menuRef}>
                <NavbarComponent />
              </div>
            )}
          </>
        ) : (
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
        )}
      </HeaderWrapper>
    </Header>
  )
}

export default HeaderComponent;