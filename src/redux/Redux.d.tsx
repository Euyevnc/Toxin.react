declare type State = {
  authorization : Authorization
  language: Language
  userData: UserData
  inputsState: InputsState
}

declare type Action = {
  type: string
  payload?: any,
}

declare type Authorization = {
  login: string | null
} 

declare type UserData = {
  selectedDates: Array<Date>
  guests: Array<GuestsData>
}

declare type GuestsData = {
  name: LocalTexts;
  value: number;
}

declare type InputsState = {
  [someInputsData: string]: any
}

declare type Language = 'en' | 'ru'


