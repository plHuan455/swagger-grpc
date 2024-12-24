import { isProduction } from "@/utils/site";

export function logDebug(...params){
  if(isProduction()) return
  console.debug(...params)
}