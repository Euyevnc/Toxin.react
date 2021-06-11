import * as React from 'react';
import {useSelector} from 'react-redux'

import './button.scss'

const Button: React.FunctionComponent<ButtonProps> = ({ text, withArrow, isLow, isHighlight, type = 'button' }) => {
  const local = useSelector((state: State) => state.language )

  return( 
    <button className = {"button" + (isLow ? ' button_low' : '') + (isHighlight ? ' button_highlight' : '')} type = {type}>
      <span className = 'button__text'>{ text[local] }</span>
      {withArrow && <span className = "button__arrow"></span>}
    </button>
  )
}

export default Button