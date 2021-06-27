import * as React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';

import { changeInputsState } from '../../redux/actions';

import Textfield from '../Textfield/Textfield';

import './dropdown.scss'

const menuExpandingIdentifier = (Symbol('input identifier for expanding of menu') as any)


const Dropdown: React.FunctionComponent<DropdownProps> = (props) => {
  const { 
    thin, 
    textfieldProps, 
    displayButtons, 
    items, 

    dispatchData, 
    lang, 
    changeInputsState,

    expanded
  } = props

  const root = useRef(null) 

  const confirmLocals: LocalTexts = {
    en: 'confirm',
    ru: 'подтвердить'
  }

  const clearLocals: LocalTexts = {
    en: 'clear',
    ru: 'очистить'
  }

  function handlerClearButtonClick() {
     dispatchData(
       items.map( item => ({...item, value: 0}) )
     ) 
  }

  return (
    <div className = {`dropdown ${thin ? 'dropdown_thin' : ''} ${expanded ? ' dropdown_expanded' : ''}`} ref = {root}>
      <Textfield {...textfieldProps} readonly = {true} handlers = {{onFocus: handlerInputFocus}} defaultValue = {formString()}/>
      <span className="dropdown__arrow" onClick = {handlerArrowClick}/>
      <div className = "dropdown__menu">
        <ul className = "dropdown__item-list">
          {
            items.map((item, index)=> {
              return (
                <li className="dropdown__element" key = {index}>
                  <strong className = "dropdown__item-name">{item.name[lang]}</strong>
                  <span className = "dropdown__counter">
                    <span className = {`dropdown__tumbler dropdown__tumbler_minus ${item.value<=item.min ? 'dropdown__tumbler_depricated' : ''}`} tabIndex = {0} onClick = {handlerMinusClick}>-</span>
                    <b className = "dropdown__number">{item.value}</b>
                    <span className = {`dropdown__tumbler dropdown__tumbler_plus ${item.value>=item.max ? 'dropdown__tumbler_depricated' : ''}`} tabIndex = {0} onClick = {handlerPlusClick}>+</span>
                  </span>
                </li>
              )

              function handlerPlusClick() {
                const currentValue = item.value
                const newValue = Math.max(item.min, Math.min(currentValue+1, item.max))
                const newGuestsData = [...props.items]
                newGuestsData.splice(index, 1, {...item, value: newValue})

                dispatchData(newGuestsData)
              }

              function handlerMinusClick() {
                const currentValue = item.value
                const newValue = Math.max(item.min, Math.min(currentValue-1, item.max))
                const newGuestsData = [...props.items]
                newGuestsData.splice(index, 1, {...item, value: newValue})

                dispatchData(newGuestsData)
              }
            })
          }
        </ul>
        {displayButtons && 
          <div className = "dropdown__buttons">
            <div className = "dropdown__button dropdown__button_delete" onClick = {handlerClearButtonClick}>
              <b>{clearLocals[lang]}</b>
            </div>
            <div className = "dropdown__button dropdown__button_confirm">
              <b>{confirmLocals[lang]}</b>
            </div>
          </div>
        }
      </div>
    </div>
  )

  function formString() {
    let string = ''
    props.items.forEach((item, index) => {
      if (!item.value) return
      string = `${string}${(string ? ', ' : '') + item.value} ${item.name[lang]}`
    })
    return string
  }

  function handlerArrowClick(event: React.MouseEvent) {
    if(!expanded) rollDownMenu()
    else rollUpMenu()
  }

  function handlerInputFocus(event: React.MouseEvent) {
    if(!expanded) rollDownMenu()
  }

  function rollDownMenu() {
    changeInputsState(menuExpandingIdentifier, true)

    document.addEventListener('click', handlerDocClick)  
    document.addEventListener('focusin', handlerDocFocusIn)  

  }

  function rollUpMenu() {
    changeInputsState(menuExpandingIdentifier, false)

    document.removeEventListener('click', handlerDocClick)  
    document.removeEventListener('focusin', handlerDocFocusIn)  

  }

  function handlerDocClick(event: MouseEvent) {
    const dropdown = root.current
    if (!dropdown.contains((event.target as HTMLElement))) {
      rollUpMenu();
    }
  }

  function handlerDocFocusIn(event: FocusEvent) {
    const dropdown = root.current

    if (!dropdown.contains((event.target as HTMLElement))) {
      rollUpMenu();
    }
  }

}

const mapStateToProps = (state: State, ownProps: DropdownOwnProps) => ({
  lang: state.language,
  expanded: state.inputsState[menuExpandingIdentifier],
  ...ownProps
})

const mapDispatchToProps = {
  changeInputsState
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)