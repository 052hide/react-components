import useSWR from 'swr'

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

export const usePet = ({
  pathParams,
}: Parameters<typeof fetchPetQueryFn>[0]) => {
  return useSWR(petKeyFactory.detail(pathParams), fetchPetQueryFn)
}
