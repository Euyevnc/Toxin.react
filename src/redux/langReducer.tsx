import {CHANGE_LANGUAGE} from "./actionTypes"


export const languageReducer = (state: Language = 'ru', action: Action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload 
    default: return state
  }
}