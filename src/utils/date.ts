import dayjs from 'dayjs'

export function formatDate(date: dayjs.ConfigType) {
  if(!date) return date
  return dayjs(date).format('YYYY.MM.DD')
}