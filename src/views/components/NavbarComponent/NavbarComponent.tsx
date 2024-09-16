
import { 
  CheckBox, 
  HeaderIcon, 
  HeaderSidebar, 
  HeaderTog 
} from './Navbar.style';

const NavbarComponent = () => {
  return (
    <>
       <HeaderTog htmlFor="checkTap">
          <HeaderIcon />
        </HeaderTog>
        <CheckBox  id="checkTap" />
        <HeaderSidebar htmlFor="checkTap" />
    </>
  )
}

export default NavbarComponent;