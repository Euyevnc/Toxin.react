import * as React from 'react';
import { connect } from 'react-redux'
import { changeInputsState } from '../../redux/actions';

import "./textfield.scss"

const inputValueIdentifier = (Symbol('input identifier for value') as any)


const Textfield: React.FunctionComponent<TextfieldProps> = (props) => {
  const {
    defaultValue = '',
    autocomplete = 'off',
    readonly = false, 
    label, 
    placeholder, 
    describe, 
    arrow, 
    type, 
    handlers,
    lang,
    value,
    dispatchValue
  } = props

  return (
    <div className = 'textfield'>
      { arrow && <strong className = 'textfield__arrow'>&#10132;</strong>}
      <label className = 'textfield__label'>
        { label && <h3 className = 'textfield__title'>{ label[lang] }</h3> }
        <input 
          readOnly = {readonly || false} 
          value = { value || defaultValue } 
          placeholder = {placeholder ? placeholder[lang] : ''} 
          type = {type || 'text'}  
          autoComplete = { autocomplete } 
          className = 'textfield__value' 
          onChange = {readonly ? null : handlerInputChange}
          {...handlers} 
        />
      </label>
      { describe && <p className = 'textfield__describe'>{ describe[lang] }</p>}
    </div>
  )

  function handlerInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatchValue(inputValueIdentifier, event.target.value)
  }
}

const mapStateToProps = (state: State, ownProps: TextfieldOwnProps) => ({
  lang: state.language,
  value: state.inputsState[inputValueIdentifier],
  ...ownProps
})

const mapDispatchToProps = {
  dispatchValue: changeInputsState
}


export default connect(mapStateToProps, mapDispatchToProps)(Textfield)