declare type TextfieldProps = {
  value?: string,
  label?: LocalTexts, 
  placeholder?: LocalTexts,
  describe?: LocalTexts, 
  arrow?: boolean, 
  type?: string,
  readonly?: boolean,
  autocomplete?: string

  handlers?: Object
}