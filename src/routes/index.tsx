import { createFileRoute } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { getAxiosClient } from '@/lib/axios-client.ts'
import { SalesOrderResponse } from '@/@types/openapi'

export const USE_MOCK_DATA = import.meta.env.DEV

export const fetchSalesOrders = async () => {
  if (USE_MOCK_DATA) {
    const response = await fetch('bc-sales-order-data.json')
    const data = await response.json()
    return data as SalesOrderResponse
  }

  const client = await getAxiosClient()
  const response = await client.SalesOrder()

  return response.data as SalesOrderResponse
}

const salesOrderQueryOptions = queryOptions({
  queryKey: ['salesOrder'],
  queryFn: () => fetchSalesOrders(),
})

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(salesOrderQueryOptions),
  component: App,
})

function App() {
  const { data } = useSuspenseQuery(salesOrderQueryOptions)

  return (
    <div className="p-4">
      <header>Hello, SalesOrders!</header>
      <article>
        <ul>
          {data.value.map((order) => (
            <li key={order.id}>Sales Order: {order.number}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}
