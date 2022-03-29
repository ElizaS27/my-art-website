import {Dropdown,
        DropdownContent} from './Submenu.styles';
import HeaderButton from '../header_button/HeaderButton';
import { StyledButton } from '../header_button/HeaderButton.styles';



const SubMenu = ({items, index}) => {
  return (
     <Dropdown>
      <StyledButton>{items.title}</StyledButton>
      <DropdownContent>
        {items.submenu.map((item, index) => {
          const title = item.title.toLowerCase();
          return <HeaderButton path={`/exercises/${title}`} key={index} display='block'>{item.title}</HeaderButton>
        })}
      </DropdownContent>
    </Dropdown>
  );
}

export default SubMenu;