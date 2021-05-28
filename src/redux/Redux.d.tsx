declare type State = {
  authorization : Authorization
  language: Language
}

declare type Action = {
  type: string
  payload?: string | null,
}

declare type Authorization = {
  login: string | null
} 

declare type Language = 'en' | 'ru'


