import { QueryClient, DefaultOptions } from 'react-query'

const defaultQueryOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
  },
}

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
})
