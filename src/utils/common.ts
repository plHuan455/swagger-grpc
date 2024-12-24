import copy from 'copy-to-clipboard'

export function copyClipboard(str: string) {
  copy(str)
}

export function debounce() {
  let timeoutFn: NodeJS.Timeout

  return (cb: () => void, delay: number = 500) => {
    if (timeoutFn) {
      clearTimeout(timeoutFn)
    }
    timeoutFn = setTimeout(() => {
      cb()
    }, delay)
  }
}

export const jsonParse = (data: string) => {
  try {
    return JSON.parse(data)
  } catch (err) {
    return null
  }
} 