import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import DoubleDatePicker from '../Double-date-picker/Double-date-picker';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import { changeGuestsData } from '../../redux/actions';

import "./room-search.scss"
import "react-datepicker/dist/react-datepicker.css";

const RoomSearch: React.FunctionComponent<RoomSearchProps> = (props) => {
  const local = useSelector((state: State) => {
    return state.language
  })

  const guests = useSelector((state:State) => {
    return state.userData.guests
  })

  const dispatch = useDispatch()

  const header = {
    ru: 'Найдём номера под ваши пожелания',
    en: 'We will find rooms according to your wishes'
  }

  const buttonProps: ButtonProps = {
    text: {ru: "Найти", en: "Search"},
    isHighlight: true,
    withArrow: true,
    type: 'submit'
  }

  const counterItems = guests.map((guest, index) => {
    return {
      ...guest,
      min: 0,
      max: 5,
      concat: index === 0 ? true : false
    }
  })

  return (
    <article className = "room-search">
      <h1 className = "room-search__header">{header[local]}</h1>
      <form name = 'room-search' action = ''>
        <div className = "room-search__container">
          <DoubleDatePicker/>
        </div>
        <div className = "room-search__container">
          <Dropdown 
            textfieldProps = {props.textfield} 
            displayButtons = {true} 
            thin = {false} 
            items = {counterItems} 
            dispatcher = {(data: GuestsData) => dispatch(changeGuestsData(data))}/>
        </div>
        <div className = "room-search__submit-button">
          <Button {...buttonProps}/>
        </div>
      </form>
    </article>
  )
}

export default RoomSearch