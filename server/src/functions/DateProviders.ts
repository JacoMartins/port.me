import dayjs from "dayjs";

export class DateProvider{
  addDays(days:number):Date {
    return dayjs().add(days, 'days').toDate();
  }
}