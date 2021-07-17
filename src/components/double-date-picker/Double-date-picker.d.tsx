declare type DoubleDatePickerProps = {
  firstSubscription?: LocalTexts;
  secondSubscription?: LocalTexts;
  firstPlaceholder?: LocalTexts;
  secondPlaceholder?: LocalTexts;

  startDate: Date;
  endDate: Date;
  changeStartDate: Function,
  changeEndDate:Function,
  clearDates: Function

  lang: Language;
}

declare type DoubleDatePickerOwnProps = {
  firstSubscription?: LocalTexts;
  secondSubscription?: LocalTexts;
  firstPlaceholder?: LocalTexts;
  secondPlaceholder?: LocalTexts;

  startDate: Date;
  endDate: Date;
  
  changeStartDate: Function,
  changeEndDate:Function,
  clearDates: Function

}