import type { SWRConfiguration } from 'swr'

export const swrConfiguration: SWRConfiguration = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  refreshInterval: 0,
}
