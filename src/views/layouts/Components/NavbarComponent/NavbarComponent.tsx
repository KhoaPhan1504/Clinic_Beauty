import React from 'react';
import { MobileNavWrapper } from './Navbar.style';
import {
  HeaderContact,
  HeaderMenuChildren,
  MenuItem,
  MenuLink,
} from '../HeaderComponent/Header.style';
import ButtonComponent from '../../../../components/Button/ButtonComponent';

const NavbarComponent: React.FC = () => {
  return (
    <>
      <MobileNavWrapper>
        <HeaderMenuChildren>
          <MenuItem>
            <MenuLink className="active" href="#">
              Home +
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Service</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Gallery</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Blog</MenuLink>
          </MenuItem>
        </HeaderMenuChildren>
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
