declare type DropdownProps = {
  textfieldProps: TextfieldOwnProps;
  displayButtons: Boolean;
  thin: boolean;
  items: Array<DropdownItem>;
  lang: Language;
  expanded: boolean;
  dispatchData: Function;
  changeInputsState: Function
}

declare type DropdownOwnProps = {
  textfieldProps: TextfieldOwnProps;
  displayButtons: Boolean;
  thin: boolean;
  items: Array<DropdownItem>;
  dispatchData: Function
}

declare type DropdownItem = {
  name: LocalTexts;
  min: number;
  max: number;
  value: number;
  concat?: boolean
}
