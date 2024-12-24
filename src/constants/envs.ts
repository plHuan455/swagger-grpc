const ENVS = {
  DOMAIN: import.meta.env.VITE_DOMAIN,
  API_DOMAIN: import.meta.env.VITE_API_DOMAIN,
  TOKEN: 'TFC',
  TELEGRAM_APP: import.meta.env.VITE_TELEGRAM_APP,
  TELEGRAM_BOT: import.meta.env.VITE_TELEGRAM_BOT,
  TELEGRAM_CHAT: import.meta.env.VITE_TELEGRAM_CHAT,
  APP_ENV: import.meta.env.VITE_APP_ENV,
  AUTH_DATA: import.meta.env.VITE_AUTH_DATA,
  GA4: import.meta.env.VITE_GA4
}

export default ENVS
