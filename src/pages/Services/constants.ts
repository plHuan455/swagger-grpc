import { Feapp } from '@tapps/beapp-connect/beapp_connect'
import { Cognac } from '@media/rum-connect/rum_connect'
import { Gilly } from '@media/gilly-connect/gilly_connect'
import { Warner } from "@hollywood/pixar-connect/pixar_connect"


export const SERVICES = {
 'beapp' : Feapp,
 'cognac': Cognac,
 'gilly': Gilly,
 'Warner': Warner
}

export type ServiceValueTypes = keyof typeof SERVICES