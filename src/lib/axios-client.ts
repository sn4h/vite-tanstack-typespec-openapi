import { OpenAPIClientAxios } from 'openapi-client-axios'
import type { Client } from '@/@types/openapi'

const api = new OpenAPIClientAxios({
  definition: '/definition/openapi.yaml',
})

let clientInstance: Client | null = null

export const getAxiosClient = async (): Promise<Client> => {
  // Here's a quite basic implementation, we need to provide BC
  // credentials and a bearer token her, that's a topic for
  // another article :-)

  if (!clientInstance) {
    clientInstance = await api.getClient<Client>()
    clientInstance.defaults.baseURL = 'http://localhost:3000/'
  }
  return clientInstance
}
