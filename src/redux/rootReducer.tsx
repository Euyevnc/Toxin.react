import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import {languageReducer} from './langReducer'

export const rootReducer = combineReducers({
  authorization: loginReducer,
  languages: languageReducer
})