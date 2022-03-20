import  { type SWRConfiguration, SWRConfig } from 'swr'

import type { ReactNode } from 'react'

type AppProviderProps = {
  swrConfiguration: SWRConfiguration
  children: ReactNode
}

export const SwrProvider = ({
  swrConfiguration,
  children,
}: AppProviderProps) => {
  return <SWRConfig value={swrConfiguration}>{children}</SWRConfig>
}
