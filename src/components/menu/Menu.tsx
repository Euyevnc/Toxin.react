import * as React from 'react';
import {useSelector} from 'react-redux'

import Authorization from '../Authorization/Authorization';

import "./menu.scss";

const Menu: React.FunctionComponent<MenuProps> = ({ elements }) => {

  const login = useSelector((state: State) => {
    return state.authorization.login
  })

  const local = useSelector((state: State) => {
    return state.language
  })

  const authorization = login ? 
    <a className="menu__element menu__login" href="#cabinet">{login}</a> 
    :
    <Authorization/>

  return(
    <nav className="menu">
      <ul className="menu__list">
        {elements.map( (element, indexElement) => {
          return (
            element.submenu ?
            <li className="menu__element" key={indexElement} onClick = {handlerElementClick}>
              <span className="menu__link" z-index="0">{element.name[local]}</span>
              <span className="menu__arrow"></span>
              <ul className="menu__submenu">
                {
                  element.submenu.map((submenu, indexSubmenu) => {
                    return(
                      <li className="menu__element" key={indexSubmenu}>
                        <a href={submenu.link}  className="menu__link">{submenu.name[local]}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            :
            <li className="menu__element" key={indexElement}>
              <a href={element.link}  className="menu__link">{element.name[local]}</a>
            </li>
          )
        })}
      </ul>
      {authorization}
   </nav>
  )

 function handlerElementClick(event: React.MouseEvent): void{
  const element = (event.target as HTMLElement).closest(".menu__element")
  element.classList.toggle("menu__element_expanded")
}
}

 export default Menu;