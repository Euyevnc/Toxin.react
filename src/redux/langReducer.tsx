import {CHANGE_LANGUAGE} from "./actionTypes"

const initialState: Languages = {
  current: 'rus',
  terms: { 
    eng: {
      entry: 'entry',
      registration: 'registration'
    },
    rus: {
      entry: 'войти',
      registration: 'регистрация'
    }
  }
}

export const languageReducer = (state: Languages = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, current: action.payload }
    default: return state
  }
}