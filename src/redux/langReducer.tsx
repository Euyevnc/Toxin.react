import {CHANGE_LANGUAGE} from "./actionTypes"

const initialState: Languages = {
  current: 'rus',
  terms: { 
    eng: {
      entry: 'entry',
      registration: 'registration',
      footerText: "Reservation of rooms in the best hotel of 2019 according to the «Hotel Views» Association",
      subscribe: "subscribe",
      subscribeOffer: "Receive special offers and service news"
    },
    rus: {
      entry: 'войти',
      registration: 'регистрация',
      footerText: "Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»",
      subscribe: "подписка",
      subscribeOffer: "Получайте специальные предложения и новости сервиса"
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