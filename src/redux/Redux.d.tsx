declare type State = {
  authorization : Authorization
  language: Language
  userData: UserData
}

declare type Action = {
  type: string
  payload?: string | null,
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

declare type Language = 'en' | 'ru'


