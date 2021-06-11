declare type DoubleDatePickerProps = {
  local: string;
  startDate: Date;
  endDate: Date;
  changeStartDate: Function,
  changeEndDate:Function,
  clearDates: Function
}