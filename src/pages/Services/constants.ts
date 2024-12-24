import {Feapp} from '@tapps/beapp-connect/beapp_connect'

export const SERVICES = {
 'beapp' : Feapp
}

export type ServiceValueTypes = keyof typeof SERVICES