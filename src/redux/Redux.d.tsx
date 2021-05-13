declare type State = {
  authorization : Authorization
  languages: Languages
}

declare type Action = {
  type: string
  payload?: string | null,
}

declare type Authorization = {
  login: string | null
} 

declare type Languages = {
  current: string,
  terms: Terms
}

declare type Terms = {
  [key: string]: LocalTerms
}

declare type LocalTerms = {
  [key: string]: string
}


