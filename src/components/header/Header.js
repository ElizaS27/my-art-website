import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {StyledNav, Icon,StyledLink} from './Header.style'
import {menuItems} from '../../data';
import MenuItems from '../menuItems/MenuItems';

const Header = () => {
  return (
    <div>
      <StyledNav>
        <Icon src="images/drawing.png"/>
        <MenuItems items={menuItems}/>
      </StyledNav>
      <Outlet />
    </div>
  );
}

export default Header;