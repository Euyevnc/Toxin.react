import * as React from 'react';
import './header.scss'
import logoIcon from "../../assets/images/logo-icon-color.svg";
import logoText from "../../assets/images/logo-text.svg"
import Menu from "../menu/Menu";
import { Burger } from '../burger/Burger';

const Header: React.FunctionComponent<HeaderProps> = ({ menuElements }) => {
  return (
      <header className="header">
        <div className="header__content">
          <div className="header__sign">
            <span>
              <img src={logoIcon} alt="logo-icon" className = "header__logo" />
            </span>
            <span>
              <img src={logoText} alt="logo-icon" className = "header__brand" />
            </span>
          </div>
          <Menu elements = {menuElements}/>
          <Burger menuSelector = ".menu" activeClass = "menu_expanded"/>
        </div>
      </header>
  );
}


export default Header;