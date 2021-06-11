import * as React from 'react';
import {useSelector} from 'react-redux'

import DoubleDatePicker from '../Double-date-picker/Double-date-picker';
import Button from '../Button/Button';

import "./room-search.scss"
import "react-datepicker/dist/react-datepicker.css";

const RoomSearch: React.FunctionComponent = ({}) => {
  const local = useSelector((state: State) => {
    return state.language
  })

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

  return (
    <article className = "room-search">
      <h1 className = "room-search__header">{header[local]}</h1>
      <form name = 'room-search' action = ''>
        <div className = "room-search__container">
          <DoubleDatePicker/>
        </div>
        <div className = "room-search__container"></div>
        <div className = "room-search__submit-button">
          <Button {...buttonProps}/>
        </div>
      </form>
    </article>
  )
}

export default RoomSearch