import {CHANGE_START_DATE, CHANGE_END_DATE, CLEARE_DATES} from '../actionTypes'

const initialState: TemporaryData = {
  selectedDates: [null, null]
}

export const temporaryDataReducer = (state: TemporaryData = initialState, action: Action) => {
  let newDates
  switch (action.type) {
    case CHANGE_START_DATE:
      newDates = [action.payload, state.selectedDates[1]]
      return {...state, selectedDates: newDates}
    case CHANGE_END_DATE:
      newDates = [state.selectedDates[0], action.payload]
      return {...state, selectedDates: newDates}
    case CLEARE_DATES:
      return {...state, selectedDates: [null, null]}
    default: return state
  }
}