import {combineReducers} from 'redux'
import {autorizationReducer} from './autorizationReducer'
import {languageReducer} from './langReducer'
import { userDataReducer } from './userDataReducer'
import { inputsStateReducer } from './inputsStateReducer'

export const rootReducer = combineReducers({
  authorization: autorizationReducer,
  language: languageReducer,
  userData: userDataReducer,
  inputsState: inputsStateReducer
})