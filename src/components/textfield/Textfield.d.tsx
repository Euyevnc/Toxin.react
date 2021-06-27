declare type TextfieldProps = {
  defaultValue?: string,
  label?: LocalTexts, 
  placeholder?: LocalTexts,
  describe?: LocalTexts, 
  arrow?: boolean, 
  type?: string,
  readonly?: boolean,
  autocomplete?: string
  handlers?: Object

  lang: Language,
  value?: string,
  dispatchValue: Function
}

declare type TextfieldOwnProps = {
  defaultValue?: string,
  label?: LocalTexts, 
  placeholder?: LocalTexts,
  describe?: LocalTexts, 
  arrow?: boolean, 
  type?: string,
  readonly?: boolean,
  autocomplete?: string

  handlers?: Object
}