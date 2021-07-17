declare type RoomSearchProps = {
  lang: Language
  guests: Array<GuestsData>

  startDate: Date
  endDate: Date 

  changeGuestsData: Function
  changeStartDate: Function
  changeEndDate: Function
  clearDates: Function

}
