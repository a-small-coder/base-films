import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import Button from "../Button/Button";
import MenuItem, { MenuItemProps } from "./MenuItem";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {

  const menuItems: MenuItemProps[] = [
    {
      href: '/movies',
      name: 'movies'
    },
    {
      href: '/comming-soon',
      name: 'about us'
    }
  ]

  return (
    <Style.Header id="header">
      <Style.Content>
      <Style.Name href='/'>ShowHub</Style.Name>
        <Style.Navbar>
          
          {menuItems.map(mi => (
            <MenuItem key={mi.href} {...mi}/>
          ))}

        </Style.Navbar>

        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
