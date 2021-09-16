export function getMonthList(
  locales?: string | string[],
  format: "long" | "short" = "long"
): string[] {
  const year = new Date().getUTCFullYear(); // 2020
  const monthList = [...Array(12).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format
  });

  const getMonthName = (monthIndex: number) =>
    formatter.format(new Date(year, monthIndex));

  return monthList.map(getMonthName);
}

export function getMonthName(date: Date): string {
  const formatter = new Intl.DateTimeFormat([], {
    month: "long"
  });
  return formatter.format(date);
}

export function getDaysInMonth(month: any, year: any) {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getDaysInMonthUTC(month: any, year: any) {
  let date = new Date(Date.UTC(year, month, 1));
  let days = [];
  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

export function getDayName(date: Date, locale = 'en-EN'): string
{
  return date.toLocaleDateString(locale, { weekday: 'short' });
}

export function getWeekDays(locale: string = 'en-EN')
{
  let baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
  let weekDays = [];
  for(let i = 0; i < 7; i++)
  {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
    baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
}
