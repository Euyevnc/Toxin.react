import * as React from 'react';
import { connect } from 'react-redux'

import DatePicker from "react-datepicker";

import "./double-date-picker.scss";

const DoubleDatePicker: React.FunctionComponent<DoubleDatePickerProps> = (props) => {
  const {
    firstSubscription,
    secondSubscription,
    firstPlaceholder,
    secondPlaceholder,

    startDate,
    endDate,
    lang,
    
    changeStartDate, 
    changeEndDate
  } = props

  const MS_PER_DAY = (60 * 60 * 24 * 1000);

  return(
    <div className = "double-date-picker">
      <div className = "double-date-picker__container">
        {firstSubscription && 
          <h3 className = "double-date-picker__subscription">{ firstSubscription[lang] }</h3>
        }
        <DatePicker
          selected={startDate}
          onChange={(date) => changeStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className='double-date-picker__input'
          placeholderText = {firstPlaceholder ? firstPlaceholder[lang] : ''}
          minDate={new Date()}

        />
      </div>
      <div className = "double-date-picker__container">
        {secondSubscription && 
          <h3 className = "double-date-picker__subscription">{ secondSubscription[lang] }</h3>
        }
        <DatePicker
          selected={endDate}
          onChange={(date) => changeEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={new Date( Date.now() + MS_PER_DAY)}
          className='double-date-picker__input'
          placeholderText = {secondPlaceholder ? secondPlaceholder[lang] : ''}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: State, ownProps: DoubleDatePickerOwnProps) => ({
  lang: state.language,
  ...ownProps
})


export default connect(mapStateToProps)(DoubleDatePicker)