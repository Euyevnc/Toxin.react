import * as React from 'react';

import "./burger.scss"

export const Burger: React.FunctionComponent<BurgerProps> = ({ menuSelector, activeClass }) => {
  return <span className = "burger" onClick = {handlerBurgerClick}></span>

  function handlerBurgerClick(event: React.MouseEvent) {
    (event.target as HTMLElement).closest(".burger").classList.toggle("burger_active")
    document.querySelector(menuSelector).classList.toggle(activeClass)
  }
}