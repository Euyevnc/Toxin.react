declare type DropdownProps = {
  textfieldProps: TextfieldProps;
  displayButtons: Boolean;
  thin: boolean;
  items: Array<DropdownItem>
  dispatcher: Function
}

declare type DropdownItem = {
  name: LocalTexts;
  min: number;
  max: number;
  value: number;
  concat?: boolean
}
