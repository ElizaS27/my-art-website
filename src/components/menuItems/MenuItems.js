// import { StyledLink } from "../header/Header.style";
import HeaderButton from "../header_button/HeaderButton";
import SubMenu from "../submenu/SubMenu";

const MenuItems = ({items}) => {
    return (
          items.map((item, index) => {
              const title = item.title.toLowerCase() !== 'home' ? item.title.toLowerCase() : '';
              return (item.submenu ? 
                <SubMenu items={item} index={index} key={index}/> :
              <HeaderButton path={`/${title}`} key={index}>{item.title}</HeaderButton>)
          }))


};

export default MenuItems;