import { CHANGE_INPUTS_STATE } from "../actionTypes"


export const inputsStateReducer = (state: InputsState = {}, action: Action) => {
  switch (action.type) {
    case CHANGE_INPUTS_STATE: 
      return {...state, ...action.payload}
    default: return state
  }
}