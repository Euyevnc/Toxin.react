import {CHANGE_LOGIN} from "../actionTypes"

const initialState: Authorization = {
  login: null
}

export const autorizationReducer = (state: Authorization = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return { ...state, login: action.payload }
    default: return state
  }
}
