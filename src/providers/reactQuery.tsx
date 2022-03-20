import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import type { ReactNode } from 'react'

type AppProviderProps = {
  queryClient: QueryClient
  children: ReactNode
}

export const ReactQueryProvider = ({
  queryClient,
  children,
}: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NEXT_IS_TEST !== 'true' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      {children}
    </QueryClientProvider>
  )
}
