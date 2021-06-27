declare type DoubleDatePickerProps = {
  lang: Language;
  startDate: Date;
  endDate: Date;
  changeStartDate: Function,
  changeEndDate:Function,
  clearDates: Function
}