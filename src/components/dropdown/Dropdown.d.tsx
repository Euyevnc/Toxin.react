declare type DropdownProps = {
  textfieldProps: TextfieldOwnProps;
  displayButtons: Boolean;
  thin: boolean;
  items: Array<DropdownItem>;
  lang: Language
  dispatcher: Function
}

declare type DropdownOwnProps = {
  textfieldProps: TextfieldOwnProps;
  displayButtons: Boolean;
  thin: boolean;
  items: Array<DropdownItem>;
  dispatcher: Function
}

declare type DropdownItem = {
  name: LocalTexts;
  min: number;
  max: number;
  value: number;
  concat?: boolean
}
