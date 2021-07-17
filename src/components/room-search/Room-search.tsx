import * as React from 'react';
import { connect } from 'react-redux'

import DoubleDatePicker from '../Double-date-picker/Double-date-picker';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import { changeGuestsData, changeEndDate, changeStartDate, clearDates } from '../../redux/actions';

import "./room-search.scss"
import "react-datepicker/dist/react-datepicker.css";

const RoomSearch: React.FunctionComponent<RoomSearchProps> = (props) => {

  const { 
    lang, 
    guests, 

    startDate,
    endDate,

    changeGuestsData,
    changeStartDate,
    changeEndDate, 
    clearDates
  } = props

  const header = {
    ru: 'Найдём номера под ваши пожелания',
    en: 'We will find rooms according to your wishes'
  }

  const buttonProps: ButtonOwnProps = React.useMemo(() => ({
    text: {ru: "Подобрать номер", en: "Search room"},
    isHighlight: true,
    withArrow: true,
    type: 'submit'
  }),
  []
  )

  const dropdownProps = React.useMemo(() => ({
    items: guests.map((guest, index) => ({
      ...guest,
      min: 0,
      max: 5,
      concat: index === 0 ? true : false
    })),
    textfieldProps: { placeholder: { ru: 'Количество гостей', en: 'Number of guests' }, label: {ru: 'Гости', en: 'Guests'} },
    displayButtons: true,
    thin: false,
    dispatchData: changeGuestsData
  }),
  [guests]
  )

  const doubleDatePickerProps = React.useMemo(() => ( {
    firstPlaceholder: {en: 'DD.MM.YYYY', ru: 'ДД.ММ.ГГГГ'},
    secondPlaceholder: {en: 'DD.MM.YYYY', ru: 'ДД.ММ.ГГГГ'}, 
    firstSubscription: { ru: 'Прибытие', en: 'Arrive' },
    secondSubscription: { ru: 'Выезд', en: 'Departure' },
    startDate,
    endDate,
    changeStartDate,
    changeEndDate,
    clearDates
  }),
  [startDate, endDate]
  )



  return (
    <article className = "room-search">
      <h1 className = "room-search__header">{header[lang]}</h1>
      <form name = 'room-search' action = ''>
        <div className = "room-search__container">
          <DoubleDatePicker {...doubleDatePickerProps}/>
        </div>
        <div className = "room-search__container">
          <Dropdown {...dropdownProps} />
        </div>
        <div className = "room-search__submit-button">
          <Button {...buttonProps}/>
        </div>
      </form>
    </article>
  )
}

const mapStateToProps = (state: State) => ({
  lang: state.language,
  guests: state.userData.guests,

  startDate: state.userData.selectedDates[0],
  endDate: state.userData.selectedDates[1]
})

const mapDispatchToProps = {
  changeGuestsData,
  changeStartDate,
  changeEndDate, 
  clearDates 

}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSearch)