import { ConnectError, Interceptor } from "@connectrpc/connect"

import { logDebug } from "./helpers"
import { LOCALSTORAGE } from "@/constants/storages"

export const setTokenClient: Interceptor = (next) => async (req) => {
  if (req.header.get("Authorization")) {
    return next(req)
  }
  const token = localStorage.getItem(LOCALSTORAGE.TOKEN)
  if (token) {
    req.header.set("Authorization", "Bearer " + token)
  }
  return next(req)
}

export const logger: Interceptor = (next) => async (req) => {
  logDebug(
    `%c[REQUEST] -> [${req.service.typeName} > ${req.method.name}]:`,
    "background-color: #deeb34; color: #000; font-size: 14px",
    req,
  )
  try {
    const res = await next(req)
    logDebug(
      `%c[RESPONSE] -> [${req.service.typeName} > ${req.method.name}]:`,
      "background-color: #23d947; color: #000; font-size: 14px",
      res,
    )
    return res
  } catch (err) {
    const connectErr = ConnectError.from(err)
    logDebug(
      `%c[ERROR] -> [${req.service.typeName}] > ${req.method.name}]: `,
      "background-color: #c0392b; color: #000; font-size: 14px",
      err,
    )
    return Promise.reject(connectErr)
  }
}

export const addTenantId = (next) => async (req) => {
  const tanant_id = localStorage.getItem(LOCALSTORAGE.TENANT_ID)
  if(tanant_id) {
    req.header.set("x-tenant-id", tanant_id)
  }
  return next(req)
}

export const modifyProtocolHeaders: Interceptor = (next) => async (req) => {
  req.header.set("Content-Type", "application/grpc-web+proto")
  return next(req)
}
