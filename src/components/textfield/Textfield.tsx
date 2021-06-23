import * as React from 'react';
import {useSelector} from 'react-redux'

import "./textfield.scss"

const Textfield: React.FunctionComponent<TextfieldProps> = ({ 
  value = '',
  label = {ru:'', en: ''}, 
  placeholder = {ru:'', en: ''}, 
  describe = {ru:'', en: ''}, 
  arrow = false, 
  type = 'text', 
  readonly = false, 
  autocomplete = 'off' ,
  handlers = []
} = { }) => {

  const local = useSelector((state: State) => {
    return state.language
  })

  return (
    <div className = 'textfield'>
      { arrow && <strong className = 'textfield__arrow'>&#10132;</strong>}
      <label className = 'textfield__label'>
        { label && <h3 className = 'textfield__title'>{ label[local] }</h3> }
        <input readOnly = {true} value = {value} placeholder = {placeholder[local]} type = {type}  autoComplete = {autocomplete} className = 'textfield__value' {...handlers} ></input>
      </label>
      { describe && <p className = 'textfield__describe'>{ describe[local] }</p>}
    </div>
  )
}

export default Textfield