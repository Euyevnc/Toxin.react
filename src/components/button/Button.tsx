import * as React from 'react';

import './button.scss'

export const Button: React.FunctionComponent<ButtonProps> = ({ text, withArrow, isLow, isHighlight, type = 'button' }) => {
  return( 
    <button className = {"button" + (isLow ? ' button_low' : '') + (isHighlight ? ' button_highlight' : '')} type = {type}>
      <span className = 'button__text'>{ text }</span>
      {withArrow && <span className = "button__arrow"></span>}
    </button>
  )
}