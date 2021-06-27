import * as React from 'react';
import {connect} from 'react-redux'

import './button.scss'

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { isLow, isHighlight, withArrow, type = 'button', text, lang} = props
  return( 
    <button className = {"button" + (isLow ? ' button_low' : '') + (isHighlight ? ' button_highlight' : '')} type = {type}>
      <span className = 'button__text'>{ text[lang] }</span>
      {withArrow && <span className = "button__arrow"></span>}
    </button>
  )
}

const mapStateToProps = (state: State, ownProps: ButtonOwnProps) => ({
  lang: state.language,
  ...ownProps
})

export default connect(mapStateToProps)(Button)