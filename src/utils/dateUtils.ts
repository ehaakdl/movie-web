export const getEndOfDayTime = (date: Date) => {
  date.setHours(23, 59, 59)
  return date
}

export const getBeginningOfDay = (date: Date) => {
  date.setHours(0, 0, 0)
  return date
}

export const convertToLocalTime = (dateIsoFormat: string) => {
  const date = new Date(dateIsoFormat);
  // 로컬 시간대 오프셋을 분 단위로 가져옵니다.
  const timezoneOffset = date.getTimezoneOffset();

  // 오프셋을 밀리초 단위로 변환합니다.
  const offsetInMilliseconds = timezoneOffset * 60 * 1000;

  // 원래 날짜에 오프셋만큼 더합니다.
  return new Date(date.getTime() - offsetInMilliseconds);
}
export type DateFormat = 'YYYY-MM-DD' | 'ISO';

export const formatDate = (date: Date, format: DateFormat) => {
  const pad = (num: number) => String(num).padStart(2, '0');
  if (format == 'YYYY-MM-DD') {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${date.getDate()}`
  } else {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${String(date.getMilliseconds()).padStart(3, '0')}Z`;
  }
}
export const toIsoString = (date: Date) => {
  const pad = (num: number, size: number = 2) => {
    return num.toString().padStart(size, '0');
  };

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}Z`;
}
