import React, { useState, useRef, useEffect } from 'react';
import { MobileNavBody, MobileNavWrapper } from './Navbar.style';
import {
  HeaderContact,
  MenuItem,
  MenuLink,
} from '../HeaderComponent/Header.style';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { NavLink } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <MobileNavWrapper>
        <MobileNavBody>
          <MenuItem>
            <MenuLink onClick={handleDropdownToggle} className="active">
              Home +
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/home2" href="#">
              Home 2
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/team" href="#">
              Team
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/contact" href="#">
              Contact
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/about" href="#">
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/service" href="#">
              Service
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/gallery" href="#">
              Gallery
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink as={NavLink} to="/blog" href="#">
              Blog
            </MenuLink>
          </MenuItem>
        </MobileNavBody>
        <HeaderContact>
          <ButtonComponent
            textButton="Contact"
            className="h-[52px] w-[158px]"
          />
        </HeaderContact>
      </MobileNavWrapper>
    </>
  );
};

export default NavbarComponent;
