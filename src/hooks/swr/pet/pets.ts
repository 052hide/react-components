import useSWR from 'swr'

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

export const usePets = ({
  queryParams,
}: Parameters<typeof fetchPetsQueryFn>[0]) => {
  return useSWR(petKeyFactory.list(queryParams), fetchPetsQueryFn)
}
