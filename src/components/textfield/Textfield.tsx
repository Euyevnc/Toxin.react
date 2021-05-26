import * as React from 'react';

import "./textfield.scss"

const Textfield: React.FunctionComponent<TextfieldProps> = ({ 
  label = '', 
  placeholder = 'enter text ', 
  describe = '', 
  arrow = false, 
  type='text', 
  readonly = false, 
  autocomplete = 'off' 
} = { }) => {
  return (
    <div className = 'textfield'>
      { arrow && <strong className = 'textfield__arrow'>&#10132;</strong>}
      <label className = 'textfield__label'>
        { label && <h3 className = 'textfield__title'>{ label }</h3> }
        <input placeholder = {placeholder} type = {type} readOnly = {readonly} autoComplete = {autocomplete} className = 'textfield__value'></input>
      </label>
      { describe && <p className = 'textfield__describe'>{ describe }</p>}
    </div>
  )
}

export default Textfield