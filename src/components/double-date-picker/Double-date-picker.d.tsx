declare type DoubleDatePickerProps = {
  local: Language;
  startDate: Date;
  endDate: Date;
  changeStartDate: Function,
  changeEndDate:Function,
  clearDates: Function
}