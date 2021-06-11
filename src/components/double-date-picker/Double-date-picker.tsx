import * as React from 'react';
import { connect } from 'react-redux'

import DatePicker from "react-datepicker";

import { changeStartDate, changeEndDate, clearDates } from '../../redux/actions'

import "./double-date-picker.scss";

const DoubleDatePicker: React.FunctionComponent<DoubleDatePickerProps> = (props) => {
  const placeholder: LocalTexts = {
    ru: 'ДД.ММ.ГГГГ',
    en: 'DD.MM.YYYY'
  }

  const MS_PER_DAY = (60 * 60 * 24 * 1000);

  return(
    <div className = "double-date-picker">
      <div className = "double-date-picker__container">
        <DatePicker
          selected={props.startDate}
          onChange={(date) => props.changeStartDate(date)}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
          className='double-date-picker__input'
          placeholderText = {placeholder[props.local]}
          minDate={new Date()}

        />
      </div>
      <div className = "double-date-picker__container">
        <DatePicker
          selected={props.endDate}
          onChange={(date) => props.changeEndDate(date)}
          selectsEnd
          startDate={props.startDate}
          endDate={props.endDate}
          minDate={new Date( Date.now() + MS_PER_DAY)}
          className='double-date-picker__input'
          placeholderText = {placeholder[props.local]}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  local: state.language,
  startDate: state.temporaryData.selectedDates[0],
  endDate: state.temporaryData.selectedDates[1],
})

const mapDispatchToProps = {
  changeStartDate,
  changeEndDate,
  clearDates
}

export default connect(mapStateToProps, mapDispatchToProps)(DoubleDatePicker)