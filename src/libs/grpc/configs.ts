import { ServiceType } from "@bufbuild/protobuf"
import { PromiseClient, createPromiseClient } from "@connectrpc/connect"
import { createGrpcWebTransport } from "@connectrpc/connect-web"

import { addTenantId, logger } from "./interceptors"
import { LOCALSTORAGE } from "@/constants/storages"

export const transport = createGrpcWebTransport({
    baseUrl: '/',
    interceptors: [addTenantId, logger],
  })

export function createGrpcClient<T extends ServiceType>(service: T): PromiseClient<T> | undefined {
  const url = localStorage.getItem(LOCALSTORAGE.GRPC_URL) ?? ''
  if(!url) return undefined
  const transport = createGrpcWebTransport({
    baseUrl: localStorage.getItem(LOCALSTORAGE.GRPC_URL) ?? '',
    interceptors: [addTenantId, logger],
  })
  return createPromiseClient(service, transport)
}
