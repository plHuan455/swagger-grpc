import ENVS from "@/constants/envs";

export function isProduction() {
  return !ENVS.APP_ENV || ENVS.APP_ENV === 'production'
}