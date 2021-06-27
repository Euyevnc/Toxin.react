import * as React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';

import Textfield from '../Textfield/Textfield';

import './dropdown.scss'

const Dropdown: React.FunctionComponent<DropdownProps> = (props) => {
  const { thin, textfieldProps, items, dispatcher, lang} = props
  const root = useRef(null) 

  return (
    <div className = {`dropdown ${thin ? 'dropdown_thin' : ''}`} ref = {root}>
      <Textfield {...textfieldProps} readonly = {true} handlers = {{onFocus: handlerInputFocus}} value = {formString()}/>
      <span className="dropdown__arrow" onClick = {handlerArrowClick}/>
      <ul className = "dropdown__menu">
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

              dispatcher(newGuestsData)
            }

            function handlerMinusClick() {
              const currentValue = item.value
              const newValue = Math.max(item.min, Math.min(currentValue-1, item.max))
              const newGuestsData = [...props.items]
              newGuestsData.splice(index, 1, {...item, value: newValue})

              dispatcher(newGuestsData)
            }
          })
        }
      </ul>
    </div>
  )

  function formString() {
    let string = ''
    props.items.map((item, index) => {
      if (!item.value) return
      string = `${string}${(index===0 ? '' : ', ') + item.value} ${item.name[lang]}`
    })
    return string
  }

  function handlerArrowClick(event: React.MouseEvent) {
    const dropdown = root.current

    if(!dropdown.classList.contains("dropdown_expanded")) rollDownMenu()
    else rollUpMenu()
  }

  function handlerInputFocus(event: React.MouseEvent) {
    const dropdown = root.current

    if(!dropdown.classList.contains("dropdown_expanded")) rollDownMenu()
  }

  function rollDownMenu() {
    const dropdown = root.current

    dropdown.classList.add("dropdown_expanded")
    document.addEventListener('click', handlerDocClick)  
    document.addEventListener('focusin', handlerDocFocusIn)  

  }

  function rollUpMenu() {
    const dropdown = root.current

    dropdown.classList.remove("dropdown_expanded")
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
  ...ownProps
})

export default connect(mapStateToProps)(Dropdown)