import { CHANGE_LANGUAGE, CHANGE_LOGIN, CHANGE_START_DATE, CHANGE_END_DATE, CLEARE_DATES, CHANGE_GUESTS_DATA } from "./actionTypes";

export const changeLogin = (login: string) => ({
  type: CHANGE_LOGIN,
  payload: login
})

export const changeLanguage = (lang: Language) => ({
  type: CHANGE_LANGUAGE,
  payload: lang
})

export const changeStartDate = (date: Date) => ({
  type: CHANGE_START_DATE,
  payload: date
})

export const changeEndDate = (date: Date) => ({
  type: CHANGE_END_DATE,
  payload: date
})

export const clearDates = () => ({
  type: CLEARE_DATES
})

export const changeGuestsData = (data: GuestsData) => ({
  type: CHANGE_GUESTS_DATA,
  payload: data
})