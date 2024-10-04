import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header,
  HeaderWrapper,
  WrapperImage,
  HeaderMore,
  HeaderMenu,
  HeaderMenuChildren,
  MenuItem,
  MenuLink,
  HeaderContact,
  DropdownMenu,
  DropdownItem,
} from './Header.style';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { MobileMenuButton, NavbarIcon } from '../NavbarComponent/Navbar.style';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import LogoComponent from '../../../../components/Logo/LogoComponent';

interface HeaderComponentProps {
  menuColor?: string;
  activeMenuColor?: string;
  logo: string;
  altLogo?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  menuColor = '#8B8B8B',
  activeMenuColor = '#091156',
  logo,
  altLogo = 'Beautice - Clinic & Beauty',
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 1140) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
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
          <NavLink to="/">
            <LogoComponent linkLogo={logo} altLogo={altLogo} />
          </NavLink>
        </WrapperImage>
        {isMobile ? (
          <>
            <MobileMenuButton onClick={toggleMenu}>
              {menuOpen ? (
                <NavbarIcon icon={faBars} />
              ) : (
                <NavbarIcon icon={faBars} />
              )}
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
                <MenuItem
                  className="_menuItem"
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <MenuLink
                    as={NavLink}
                    to="/"
                    className="active"
                    href="#"
                    color={menuColor}
                    activeColor={activeMenuColor}
                  >
                    Home +
                  </MenuLink>
                  {dropdownOpen && (
                    <DropdownMenu>
                      <DropdownItem>
                        <NavLink to="/">Home</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/home2">Home 2</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/team">Team</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/contact">Contact</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </MenuItem>
                <MenuItem className="_menuItem">
                  <MenuLink as={NavLink} to="/about" href="#" color={menuColor}>
                    About
                  </MenuLink>
                </MenuItem>
                <MenuItem className="_menuItem">
                  <MenuLink
                    as={NavLink}
                    to="/service"
                    href="#"
                    color={menuColor}
                  >
                    Service
                  </MenuLink>
                </MenuItem>
                <MenuItem className="_menuItem">
                  <MenuLink
                    as={NavLink}
                    to="/gallery"
                    href="#"
                    color={menuColor}
                  >
                    Gallery
                  </MenuLink>
                </MenuItem>
                <MenuItem className="_menuItem">
                  <MenuLink as={NavLink} to="/blog" href="#" color={menuColor}>
                    Blog
                  </MenuLink>
                </MenuItem>
              </HeaderMenuChildren>
            </HeaderMenu>
            <HeaderContact>
              <ButtonComponent
                textButton="Contact"
                className="h-[52px] w-[158px]"
              />
            </HeaderContact>
          </HeaderMore>
        )}
      </HeaderWrapper>
    </Header>
  );
};

export default HeaderComponent;
