export function isTelegramLink(url: string) {
  if (!url) return false
  return Boolean(url.match(/^(https?:\/\/)?t\.me/g))
}
