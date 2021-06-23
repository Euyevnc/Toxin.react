import {CHANGE_START_DATE, CHANGE_END_DATE, CLEARE_DATES, CHANGE_GUESTS_DATA} from '../actionTypes'

const initialState: UserData = {
  selectedDates: [null, null],
  guests: [
    {
      name: {
        ru: 'взрослых',
        en: 'adults'
      },
      value: 0
    },
    {
      name: {
        ru: 'детей',
        en: 'children'
      },
      value: 0
    },
    {
      name: {
        ru: 'младенцев',
        en: 'babies'
      },
      value: 0
    }
  ],
}

export const userDataReducer = (state: UserData = initialState, action: Action) => {
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
    case CHANGE_GUESTS_DATA: 
      return {...state, guests: action.payload}
    default: return state
  }
}