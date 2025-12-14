import { OpenAPIClientAxios } from 'openapi-client-axios'
import type { Client } from '@/@types/openapi'

const api = new OpenAPIClientAxios({
  definition: '/definition/openapi.yaml',
})

let clientInstance: Client | null = null

export const getAxiosClient = async (): Promise<Client> => {
  // This is quite a basic implementation, we need to provide BC
  // credentials and a bearer token here, that's a topic for
  // another article, how do we authorize our app and provide
  // the credentials? :-)

  if (!clientInstance) {
    clientInstance = await api.getClient<Client>()
  }
  return clientInstance
}
