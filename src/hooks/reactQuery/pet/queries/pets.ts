import { useQuery } from 'react-query'

import type { UseQueryOptions } from 'react-query'

import { fetchPets } from '@/api/pet'
import type { PetsRequestQueryParams } from '@/api/types/pet'

import { petKeyFactory } from './key'

export const fetchPetsQueryFn = ({
  queryParams,
}: {
  queryParams?: PetsRequestQueryParams
}) => {
  return fetchPets({ queryParams })
}

export type UsePetsOptions = {
  config: UseQueryOptions<Awaited<ReturnType<typeof fetchPetsQueryFn>>>
}

export const usePets = ({
  config,
  queryParams,
}: Parameters<typeof fetchPetsQueryFn>[0] & {
  config?: UsePetsOptions
}) => {
  const queryConfig = {
    ...config,
    queryKey: petKeyFactory.list(queryParams),
    queryFn: () => fetchPetsQueryFn({ queryParams }),
  }
  return useQuery(queryConfig)
}
