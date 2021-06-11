declare type State = {
  authorization : Authorization
  language: Language
  temporaryData: TemporaryData
}

declare type Action = {
  type: string
  payload?: string | null,
}

declare type Authorization = {
  login: string | null
} 

declare type TemporaryData = {
  selectedDates: Array<Date>
}

declare type Language = 'en' | 'ru'


