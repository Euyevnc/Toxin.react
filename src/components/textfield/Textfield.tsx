import * as React from 'react';
import { connect } from 'react-redux'

import "./textfield.scss"

const Textfield: React.FunctionComponent<TextfieldProps> = (props) => {
  const {
    value = '',
    label = {ru:'', en: ''}, 
    placeholder = {ru:'', en: ''}, 
    describe = {ru:'', en: ''}, 
    arrow = false, 
    type = 'text', 
    readonly = false, 
    autocomplete = 'off' ,
    handlers = [],
    lang
  } = props

  return (
    <div className = 'textfield'>
      { arrow && <strong className = 'textfield__arrow'>&#10132;</strong>}
      <label className = 'textfield__label'>
        { label && <h3 className = 'textfield__title'>{ label[lang] }</h3> }
        <input readOnly = {readonly} value = {value} placeholder = {placeholder[lang]} type = {type}  autoComplete = {autocomplete} className = 'textfield__value' {...handlers} ></input>
      </label>
      { describe && <p className = 'textfield__describe'>{ describe[lang] }</p>}
    </div>
  )
}

const mapStateToProps = (state: State, ownProps: TextfieldOwnProps) => ({
  lang: state.language,
  ...ownProps
})

export default connect(mapStateToProps)(Textfield)