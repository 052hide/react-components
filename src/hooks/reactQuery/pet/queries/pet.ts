import { useQuery } from 'react-query'

import type { UseQueryOptions } from 'react-query'

import { fetchPet } from '@/api/pet'
import type { PetDetailRequestPathParams } from '@/api/types/pet'

import { petKeyFactory } from './key'

export const fetchPetQueryFn = ({
  pathParams,
}: {
  pathParams: PetDetailRequestPathParams
}) => {
  return fetchPet({ pathParams })
}

export type UsePetOptions = {
  config: UseQueryOptions<Awaited<ReturnType<typeof fetchPetQueryFn>>>
}

export const usePet = ({
  config,
  pathParams,
}: Parameters<typeof fetchPetQueryFn>[0] & {
  config: UsePetOptions
}) => {
  const queryConfig = {
    ...config,
    queryKey: petKeyFactory.detail(pathParams),
    queryFn: () => fetchPetQueryFn({ pathParams }),
  }
  return useQuery(queryConfig)
}
