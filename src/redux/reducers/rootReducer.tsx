import {combineReducers} from 'redux'
import {autorizationReducer} from './autorizationReducer'
import {languageReducer} from './langReducer'
import { temporaryDataReducer } from './temporaryDataReducer'

export const rootReducer = combineReducers({
  authorization: autorizationReducer,
  language: languageReducer,
  temporaryData: temporaryDataReducer
})